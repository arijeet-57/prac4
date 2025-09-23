import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            email: "Blake@gmail.com",
            name: "Blake Yedda"
        }
    })
}

main()