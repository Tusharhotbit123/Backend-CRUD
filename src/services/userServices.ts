import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import jwt from "jsonwebtoken";

class userService {
  static async createUser(name: string, email: string, password: string) {
    return await prisma.user.create({ data: { name, email, password } });
  }

  static async loginUser(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new Error("User nor found");
    } else {
      if (password !== user.password) {
        throw new Error("Invalid Credentials !");
      } else {
        const accessToken = jwt.sign(
          { userId: user.id },
          process.env.SECRET_KEY as string,
          { expiresIn: "30m" },
        );
        const refreshToken = jwt.sign(
          { userId: user.id },
          process.env.SECRET_KEY as string,
          { expiresIn: "7d" },
        );

        return { accessToken, refreshToken };
      }
    }
  }
}

export default userService;
