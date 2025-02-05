/*
  Warnings:

  - A unique constraint covering the columns `[authorId]` on the table `Refreshtoken` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Refreshtoken_authorId_key" ON "Refreshtoken"("authorId");
