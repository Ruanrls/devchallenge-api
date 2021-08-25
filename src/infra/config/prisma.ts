import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const connectWithDatabase = async () => {
  await prisma.$connect()

  console.log('Connected with database...')
}

export { prisma, connectWithDatabase }
