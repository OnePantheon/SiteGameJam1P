import { json } from '@sveltejs/kit';
import {fakeGameJams} from '$lib/server/database.js';


export function GET() {
	return json(fakeGameJams);
}
