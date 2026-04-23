/**
 * @param {import("knex").Knex} knex
 */
export async function up(knex) {
  await knex.schema.createTable("order_item", (t) => {
    t.increments("id").primary();

    t.integer("customer_order_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("customer_order")
      .onDelete("CASCADE");

    t.integer("event_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("event");

    t.string("title").notNullable(); // snapshot
    t.decimal("price", 10, 2).notNullable();
    t.string("currency", 3).notNullable();

    t.integer("quantity").notNullable();

    t.timestamp("ordered_at").defaultTo(knex.fn.now());
  });
}

/**
 * @param {import("knex").Knex} knex
 */
export async function down(knex) {
  await knex.schema.dropTableIfExists("order_item");
}
