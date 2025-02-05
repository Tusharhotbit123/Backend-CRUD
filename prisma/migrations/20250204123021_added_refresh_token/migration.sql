-- CreateTable
CREATE TABLE "Refreshtoken" (
    "id" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "Refreshtoken_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Refreshtoken" ADD CONSTRAINT "Refreshtoken_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
