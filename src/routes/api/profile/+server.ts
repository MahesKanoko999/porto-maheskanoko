import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ platform }) => {
    try {
        const db = platform?.env?.DB;
        if (!db) {
            return json({ error: 'Database not available' }, { status: 500 });
        }

        const result = await db.prepare('SELECT * FROM profile WHERE id = 1').first();

        if (!result) {
            return json({ error: 'Profile not found' }, { status: 404 });
        }

        // Parse JSON fields
        const profile = {
            ...result,
            about: JSON.parse(result.about as string || '[]'),
            social: JSON.parse(result.social as string || '{}')
        };

        return json(profile);
    } catch (error) {
        console.error('Failed to read profile:', error);
        return json({ error: 'Failed to read profile' }, { status: 500 });
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
			UPDATE profile SET
				name = ?,
				title = ?,
				bio = ?,
				about = ?,
				social = ?
			WHERE id = 1
		`).bind(
            data.name,
            data.title,
            data.bio,
            JSON.stringify(data.about),
            JSON.stringify(data.social)
        ).run();

        return json({ success: true, data });
    } catch (error) {
        console.error('Failed to update profile:', error);
        return json({ error: 'Failed to update profile' }, { status: 500 });
    }
};
