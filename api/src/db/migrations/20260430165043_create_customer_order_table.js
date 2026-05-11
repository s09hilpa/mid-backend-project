/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable("customer_order", (t) => {
    t.increments("id").primary();
    t.integer("user_id").unsigned();
    t.decimal("total_price", 10, 2).notNullable();
    t.string("currency", 3).notNullable(); // 👈 ADD THIS

    t.foreign("user_id").references("app_user.id");
  });
}
export async function down(knex) {
  await knex.schema.dropTableIfExists("customer_order");
}
