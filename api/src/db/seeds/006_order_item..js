export async function seed(knex) {
  await knex("order_item").del();


}
