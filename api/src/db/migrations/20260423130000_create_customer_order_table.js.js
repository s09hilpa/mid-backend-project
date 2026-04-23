/**
 * @param {import("knex").Knex} knex
 */
export async function up(knex) {
  await knex.schema.createTable("customer_order", (t) => {
    t.increments("id").primary();

    t.integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("userprofile")
      .onDelete("CASCADE");

    t.decimal("total_amount", 10, 2).notNullable();
    t.string("currency", 3).notNullable();

    t.string("status").defaultTo("pending"); // pending, paid, cancelled

    t.timestamps(true, true);
  });
}

/**
 * @param {import("knex").Knex} knex
 */
export async function down(knex) {
  await knex.schema.dropTableIfExists("customer_order");
}
