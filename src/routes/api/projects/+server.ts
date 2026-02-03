import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ platform }) => {
    try {
        const db = platform?.env?.DB;
        if (!db) {
            return json({ error: 'Database not available' }, { status: 500 });
        }

        const { results } = await db.prepare('SELECT * FROM projects ORDER BY sort_order ASC').all();

        // Parse JSON fields
        const projects = results.map((row: Record<string, unknown>) => ({
            ...row,
            tags: JSON.parse(row.tags as string || '[]')
        }));

        return json(projects);
    } catch (error) {
        console.error('Failed to read projects:', error);
        return json({ error: 'Failed to read projects' }, { status: 500 });
    }
};

export const POST: RequestHandler = async ({ request, platform }) => {
    try {
        const db = platform?.env?.DB;
        if (!db) {
            return json({ error: 'Database not available' }, { status: 500 });
        }

        const data = await request.json();
        const id = `proj-${Date.now()}`;

        await db.prepare(`
			INSERT INTO projects (id, title, description, image, url, github, tags, sort_order)
			VALUES (?, ?, ?, ?, ?, ?, ?, ?)
		`).bind(
            id,
            data.title,
            data.description || '',
            data.image || '',
            data.url || '',
            data.github || '',
            JSON.stringify(data.tags || []),
            0
        ).run();

        return json({ success: true, data: { ...data, id } });
    } catch (error) {
        console.error('Failed to create project:', error);
        return json({ error: 'Failed to create project' }, { status: 500 });
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
			UPDATE projects SET
				title = ?,
				description = ?,
				image = ?,
				url = ?,
				github = ?,
				tags = ?
			WHERE id = ?
		`).bind(
            data.title,
            data.description || '',
            data.image || '',
            data.url || '',
            data.github || '',
            JSON.stringify(data.tags || []),
            data.id
        ).run();

        return json({ success: true, data });
    } catch (error) {
        console.error('Failed to update project:', error);
        return json({ error: 'Failed to update project' }, { status: 500 });
    }
};

export const DELETE: RequestHandler = async ({ request, platform }) => {
    try {
        const db = platform?.env?.DB;
        if (!db) {
            return json({ error: 'Database not available' }, { status: 500 });
        }

        const { id } = await request.json();

        await db.prepare('DELETE FROM projects WHERE id = ?').bind(id).run();

        return json({ success: true });
    } catch (error) {
        console.error('Failed to delete project:', error);
        return json({ error: 'Failed to delete project' }, { status: 500 });
    }
};
