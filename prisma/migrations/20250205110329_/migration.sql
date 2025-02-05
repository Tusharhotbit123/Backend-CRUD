-- DropForeignKey
ALTER TABLE "Tasks" DROP CONSTRAINT "Tasks_authorId_fkey";

-- AlterTable
ALTER TABLE "Tasks" ALTER COLUMN "authorId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
