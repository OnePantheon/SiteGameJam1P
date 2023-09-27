const fakeGameJams = [
    {
        name: "Ring jam",
        description: "A gamejame where the main theme was rings",
    },
    {
        name: "Crazy jam",
        description: "A gamejame where the main theme was crazy",
    },
    {
        name: "Jam jam",
        description: "A gamejame where the main theme was jam",
    }
]

function getCurrent(){
    console.log(fakeGameJams[0].name)
    return fakeGameJams[0];
}

export default {fakeGameJams, getCurrent}