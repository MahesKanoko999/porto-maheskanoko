import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ platform }) => {
    try {
        const db = platform?.env?.DB;
        if (!db) {
            return json({ error: 'Database not available' }, { status: 500 });
        }

        const { results } = await db.prepare('SELECT * FROM experience ORDER BY sort_order ASC').all();

        // Parse JSON fields
        const experiences = results.map((row: Record<string, unknown>) => ({
            ...row,
            tags: JSON.parse(row.tags as string || '[]'),
            companyUrl: row.company_url
        }));

        return json(experiences);
    } catch (error) {
        console.error('Failed to read experiences:', error);
        return json({ error: 'Failed to read experiences' }, { status: 500 });
    }
};

export const POST: RequestHandler = async ({ request, platform }) => {
    try {
        const db = platform?.env?.DB;
        if (!db) {
            return json({ error: 'Database not available' }, { status: 500 });
        }

        const data = await request.json();
        const id = `exp-${Date.now()}`;

        await db.prepare(`
			INSERT INTO experience (id, period, title, company, company_url, description, tags, sort_order)
			VALUES (?, ?, ?, ?, ?, ?, ?, ?)
		`).bind(
            id,
            data.period,
            data.title,
            data.company,
            data.companyUrl || '',
            data.description || '',
            JSON.stringify(data.tags || []),
            0
        ).run();

        return json({ success: true, data: { ...data, id } });
    } catch (error) {
        console.error('Failed to create experience:', error);
        return json({ error: 'Failed to create experience' }, { status: 500 });
    }
};

export const PUT: RequestHandler = async ({ request, platform }) => {
    try {
        const db = platform?.env?.DB;
        if (!db) {
            return json({ error: 'Database not available' }, { status: 500 });
        }

        const data = await request.json();

        await db.prepare(`
			UPDATE experience SET
				period = ?,
				title = ?,
				company = ?,
				company_url = ?,
				description = ?,
				tags = ?
			WHERE id = ?
		`).bind(
            data.period,
            data.title,
            data.company,
            data.companyUrl || '',
            data.description || '',
            JSON.stringify(data.tags || []),
            data.id
        ).run();

        return json({ success: true, data });
    } catch (error) {
        console.error('Failed to update experience:', error);
        return json({ error: 'Failed to update experience' }, { status: 500 });
    }
};

export const DELETE: RequestHandler = async ({ request, platform }) => {
    try {
        const db = platform?.env?.DB;
        if (!db) {
            return json({ error: 'Database not available' }, { status: 500 });
        }

        const { id } = await request.json();

        await db.prepare('DELETE FROM experience WHERE id = ?').bind(id).run();

        return json({ success: true });
    } catch (error) {
        console.error('Failed to delete experience:', error);
        return json({ error: 'Failed to delete experience' }, { status: 500 });
    }
};
