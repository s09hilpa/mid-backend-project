export async function seed(knex) {
  // delete existing rows (clean reset)
  await knex("cart").del();

  // insert cart
  await knex("cart").insert([
    {
      id: 1,
      user_id: null, // guest cart (allowed in your project)
      is_active: true,
    },
  ]);
}
