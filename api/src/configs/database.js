import knex from "knex";
import { createKnexConfig } from "./knex-config.js";

const db = knex(createKnexConfig());

export default db;
