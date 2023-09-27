import database from '$lib/server/database.js';

export function load({ params }) {
    return {
        current: database.getCurrent(),
        gameJams: database.fakeGameJams
    }

}