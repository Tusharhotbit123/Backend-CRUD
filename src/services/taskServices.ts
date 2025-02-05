import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class taskServices {
  static async findTasks(userId: string) {
    const tasks = await prisma.tasks.findMany({ where: { authorId: userId } });
    if (!tasks) throw new Error("tasks not found!");

    return tasks;
  }

  static async createTask(title:string,status:string,id:string){

    const task=await prisma.tasks.create({data:{authorId:id,title,status}})

    if(!task) throw new Error("Could not create task!")
    
      return task

  }



}

export default taskServices;
