export async function seed(knex) {
  await knex("customer_order").del();

  
}
