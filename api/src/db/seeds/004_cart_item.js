export async function seed(knex) {
  await knex("cart_item").del();

  await knex("cart_item").insert([
    {
      id: 1,
      cart_id: 1,
      event_id: 1,
      quantity: 2,
      price: 100,
    },
    {
      id: 2,
      cart_id: 1,
      event_id: 2,
      quantity: 1,
      price: 150,
    },
  ]);
}
