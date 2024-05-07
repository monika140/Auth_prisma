//prisma instance for database connection
//koi bhi query hit krne k liye hum isis instance ko use krenge
//
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
  log: ["query"],
});

module.exports = prisma;
