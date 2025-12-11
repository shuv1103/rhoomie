import "dotenv/config";
import { defineConfig, env } from "prisma/config";
import path from "node:path";

export default defineConfig({
  schema: path.join("src/prisma/schema.prisma"),

  datasource: {
    // Prisma CLI and client use this to connect
    url: env("DATABASE_URL"),
  },

  migrations: {
    path: path.join("prisma/migrations"),
  },
});
