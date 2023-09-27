import database from "../../../lib/server/database"

export function load({ params }) {
    return{
        gamejam: database.fakeGameJams.find((jam) => jam.name === params.jamname)
    };
}