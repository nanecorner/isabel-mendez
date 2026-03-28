-- AlterTable
ALTER TABLE "Education" ADD COLUMN     "city" TEXT,
ADD COLUMN     "country" TEXT;

-- AlterTable
ALTER TABLE "Experience" ADD COLUMN     "city" TEXT,
ADD COLUMN     "country" TEXT;

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "password" TEXT,
ALTER COLUMN "themePrimary" SET DEFAULT '#ffffff',
ALTER COLUMN "themeSecondary" SET DEFAULT '#000000';

-- AlterTable
ALTER TABLE "Teaching" ADD COLUMN     "city" TEXT,
ADD COLUMN     "country" TEXT;
