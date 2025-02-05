-- CreateEnum
CREATE TYPE "Status" AS ENUM ('complete', 'incomplete');

-- CreateTable
CREATE TABLE "Tasks" (
    "id" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "status" "Status" NOT NULL,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
