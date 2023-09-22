import { json } from '@sveltejs/kit';

export function GET() {
    let apiVersion = {
        "version": "1.0.0"
    };

	return json(apiVersion);
}
