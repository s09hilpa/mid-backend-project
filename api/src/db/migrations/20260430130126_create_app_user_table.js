/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable("app_user", (t) => {
    t.increments("id").primary();
    t.string("email").notNullable().unique();
    t.string("password").notNullable();
    t.timestamps(true, true);
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function down(knex) {
  await knex.schema.dropTableIfExists("app_user");
}