import {PrismaClient} from '@prisma/client'
import database from "../src/lib/server/database"

const prisma = new PrismaClient()

async function main() {
    console.log(`Start seeding ...`)
  
    for (const p of database.fakeGameJams) {
        const gamjam = await prisma.gamjam.create({
            data: {
              name: p.name,
              description: p.description,
              startTime: p.startTime,
              endTime: p.endTime,
            }
        })
      console.log(`Created gamejam with name: ${gamjam.id}`)
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