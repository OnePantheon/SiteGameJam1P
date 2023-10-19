import database from '$lib/server/database.js';

export async function load({ params }) {
    return {
        gameJams: await database.getAllGamejams()
    }

}