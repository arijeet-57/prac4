import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
    await prisma.post.create({
        data: {
            title: "Post title",
            content: "akjdjdfkd",
            author: {
                connect: {
                    id: 1
                }
            }
        }
    });
}
main();
//# sourceMappingURL=create-post.js.map