import database from '$lib/server/database.js';

export function load({ params }) {
    return {
        gameJams: database.fakeGameJams
    }

}