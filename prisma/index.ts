import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  const visitors = await prisma.visitor.findUnique({
    where: {
      id: "65bbaadc02c0c3f726dcbf3a"
    }
  })
  

  console.log("visitors from client: ", visitors?.count);
  
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