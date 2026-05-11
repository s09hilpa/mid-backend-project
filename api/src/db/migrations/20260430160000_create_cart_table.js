/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable("cart", (t) => {
    t.increments("id").primary();
    t.integer("user_id").references("id").inTable("app_user").nullable();
    t.boolean("is_active").defaultTo(true);
    t.timestamps(true, true);

    t.unique(["user_id", "is_active"]);//one user one active cart
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTableIfExists("cart");
}
