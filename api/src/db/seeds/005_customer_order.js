export async function seed(knex) {
  await knex("customer_order").del();

  await knex("customer_order").insert([
    {
      id: 1,
      user_id: 1,
      total_price: 300,
      currency: "DKK",
    },
  ]);
}
