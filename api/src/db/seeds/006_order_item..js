export async function seed(knex) {
  await knex("order_item").del();

  await knex("order_item").insert([
    {
      id: 1,
      order_id: 1,
      event_id: 1,
      quantity: 2,
      price: 100,
    },
  ]);
}
