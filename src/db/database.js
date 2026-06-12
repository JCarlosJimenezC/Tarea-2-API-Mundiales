import Database from "better-sqlite3";
import { cwd } from "node:process";

const db = new Database(`${cwd()}/src/db/mundiales.db`);

export default db;
