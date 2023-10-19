import database from "$lib/server/database"

export async function load({ params }) {
    console.log(await database.getGamejamByName(params.jamname))
    return{
        gamejam: await database.getGamejamByName(params.jamname)
    };
}