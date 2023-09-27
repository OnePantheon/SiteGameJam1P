import { json } from '@sveltejs/kit';
import database from '$lib/server/database.js';


export function GET() {
	return json(database.getCurrent());
}
