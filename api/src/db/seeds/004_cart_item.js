export async function seed(knex) {
  await knex("cart_item").del();

  // get existing cart
  const cart = await knex("cart").first();

  await knex("cart_item").insert([
    {
      cart_id: cart.id,
      event_id: 1,
      quantity: 2,
      price: 100,
    },
    {
      cart_id: cart.id,
      event_id: 2,
      quantity: 1,
      price: 150,
    },
  ]);
}
