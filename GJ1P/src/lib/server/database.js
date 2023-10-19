import prisma from '$lib/prisma';

async function getCurrent(){
    let allGamejams = await getAllGamejams();

    console.log(allGamejams);
    
    let runningGamejams = allGamejams.filter(gamejam => {
        return gamejam.startTime < Date.now() && gamejam.endTime > Date.now();
    });
    
    return runningGamejams[0];
}

async function getAllGamejams(){
    return await prisma.gamejam.findMany();
}

async function getGamejamByName(name){
    let result = await prisma.gamejam.findMany({
        where: {
            name
        }
    });

    if(result.length >= 1){
        return result[0];
    }

    return null;
}

export default {getCurrent, getGamejamByName, getAllGamejams}