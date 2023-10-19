/*
  Warnings:

  - You are about to alter the column `startTime` on the `Gamejam` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to alter the column `endTime` on the `Gamejam` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `Gamejam` MODIFY `startTime` DATETIME(3) NOT NULL,
    MODIFY `endTime` DATETIME(3) NOT NULL;
