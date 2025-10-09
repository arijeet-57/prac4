import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
    await prisma.user.update({
        where: {
            id: 1
        },
        data: {
            name: "John Doe"
        }
    });
}
main();
//# sourceMappingURL=update-user.js.map