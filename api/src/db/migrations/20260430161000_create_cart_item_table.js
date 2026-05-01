/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable("cart_item", (t) => {
    t.increments("id").primary();
    t.integer("cart_id").references("id").inTable("cart").onDelete("CASCADE");
    t.integer("event_id").references("id").inTable("event");
    t.integer("quantity").notNullable();
    t.decimal("price", 10, 2).notNullable();
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTableIfExists("cart_item");
}
