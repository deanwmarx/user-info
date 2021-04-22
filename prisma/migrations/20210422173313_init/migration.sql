-- CreateTable
CREATE TABLE "user_info" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cellphone" INTEGER,
    "height" INTEGER NOT NULL,
    "weight" INTEGER,
    "recently_sick" BOOLEAN NOT NULL,
    "accepted" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_info.email_unique" ON "user_info"("email");
