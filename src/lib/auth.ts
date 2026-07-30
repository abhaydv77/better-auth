import { betterAuth } from "better-auth";
import Database from "better-sqlite3";
import { nextCookies } from "better-auth/next-js";

const db = new Database("auth.db");

export const auth = betterAuth({
  database: db,
  plugins: [nextCookies()],
});
