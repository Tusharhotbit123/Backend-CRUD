import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class taskServices {
  static async findTasks(userId: string) {
    const tasks = await prisma.tasks.findMany({ where: { authorId: userId } });
    if (!tasks) throw new Error("tasks not found!");

    return tasks;
  }

  static async createTask(title: string, status: string, id: string) {
    const task = await prisma.tasks.create({
      data: { authorId: id, title, status },
    });

    if (!task) throw new Error("Could not create task!");

    return task;
  }

  static async updateTask(title: string, status: string, taskid: string) {
    const updateTask = await prisma.tasks.update({
      where: { id: taskid },
      data: { title, status },
    });

    if (!updateTask) throw new Error("Couldnot update task!");

    return updateTask;
  }

  static async deleteTask(taskId: string) {
    const deletedTask = await prisma.tasks.delete({ where: { id: taskId } });

    if (!deletedTask) throw new Error("The task doesnot exist!");

    return deletedTask;
  }
}

export default taskServices;
