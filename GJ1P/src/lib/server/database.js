const fakeGameJams = [
    {
        name: "Ring jam",
        description: "A gamejame where the main theme was rings",
        startTime: "2023-09-27T16:00:00.000Z",
        endTime: "2023-09-27T18:00:00.000Z"
    },
    {
        name: "Crazy jam",
        description: "A gamejame where the main theme was crazy",
        startTime: "2024-09-27T16:00:00.000Z",
        endTime: "2024-09-27T18:00:00.000Z"
    },
    {
        name: "Jam jam",
        description: "A gamejame where the main theme was jam",
        startTime: "2022-09-27T16:00:00.000Z",
        endTime: "2022-09-27T18:00:00.000Z",
    }
]

function getCurrent(){
    return fakeGameJams[0];
}

export default {fakeGameJams, getCurrent}