
export async function up(knex) {
  await knex.schema.createTable("event", (t) => {
    t.increments("id").primary();
    t.decimal("price", 10, 2).notNullable();
    t.string("currency", 3).notNullable();
    t.string("title").notNullable();
    t.text("description");
    t.timestamps(true, true);
    t.date("event_date").notNullable();
    t.time("event_time").notNullable();
    t.string("venue").notNullable();
  });
}

export async function down(knex) {
  await knex.schema.dropTableIfExists("event");
}
