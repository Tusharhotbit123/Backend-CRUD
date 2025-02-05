import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class taskServices {
  static async findTasks(userId: string) {
    const tasks = await prisma.tasks.findMany({ where: { authorId: userId } });
    if (!tasks) throw new Error("tasks not found!");

    return tasks;
  }
}

export default taskServices;
