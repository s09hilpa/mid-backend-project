/**
 * @param {import("knex").Knex} knex
 */
export async function up(knex) {
  await knex.schema.createTable("userprofile", (t) => {
    t.increments("id").primary();
    t.string("name").notNullable();
    t.string("email").notNullable(); 
  });
}

/**
 * @param {import("knex").Knex} knex
 */
export async function down(knex) {
  await knex.schema.dropTableIfExists("userprofile");
}
