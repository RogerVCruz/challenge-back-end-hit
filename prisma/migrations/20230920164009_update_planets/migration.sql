/*
  Warnings:

  - Added the required column `terrain` to the `planets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weather` to the `planets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "planets" ADD COLUMN     "terrain" TEXT NOT NULL,
ADD COLUMN     "weather" TEXT NOT NULL;
