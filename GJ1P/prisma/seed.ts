import {PrismaClient} from '@prisma/client'

const fakeGameJams = [
  {
      name: "Ring jam",
      description: "A gamejame where the main theme was rings",
      startTime: "2023-10-04T13:00:00.000Z",
      endTime: "2023-10-04T20:00:00.000Z"
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

const prisma = new PrismaClient()

async function main() {
    console.log(`Start seeding ...`)
  
    await prisma.gamejam.deleteMany();
    for (const p of fakeGameJams) {
        const gamejam = await prisma.gamejam.create({
            data: {
              name: p.name,
              description: p.description,
              startTime: p.startTime,
              endTime: p.endTime,
            }
        })
      console.log(`Created gamejam with id: ${gamejam.id}`)
    }
    console.log(`Seeding finished.`)
}
  
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })