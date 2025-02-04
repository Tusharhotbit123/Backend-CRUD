import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient();

class userService{

    static async createUser(name:string,email:string,password:string){

        return await prisma.user.create({data:{name,email,password}});

    }

}

export default userService;