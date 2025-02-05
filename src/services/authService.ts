import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class authorization {
  static async findUser(id: string) {
    const user = await prisma.user.findUnique({ where: { id } });

    if (!user) {
      throw new Error("user not found");
    } else {
      return user;
    }
  }
}

export default authorization;
