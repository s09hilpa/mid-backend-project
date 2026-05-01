/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable("order_item", (t) => {
    t.increments("id").primary();
    t.integer("order_id")
      .references("id")
      .inTable("customer_order")
      .onDelete("CASCADE");
    t.integer("event_id").references("id").inTable("event");
    t.integer("quantity");
    t.decimal("price", 10, 2).notNullable();
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTableIfExists("order_item");
}
