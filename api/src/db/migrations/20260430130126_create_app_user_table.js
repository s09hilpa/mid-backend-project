export async function up(knex) {
  await knex.schema.createTable("app_user", (t) => {
    t.increments("id").primary();
    t.string("name").notNullable();
    t.string("email").notNullable().unique();
    t.bigint("mobile").notNullable();
    t.string("password").notNullable();
    t.timestamps(true, true);
  });
}

export async function down(knex) {
  await knex.schema.dropTableIfExists("app_user");
}
