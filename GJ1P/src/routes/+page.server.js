import {fakeGameJams} from '$lib/server/database.js';

export function load({ params }) {
    return {
        gameJams: fakeGameJams
    }

}