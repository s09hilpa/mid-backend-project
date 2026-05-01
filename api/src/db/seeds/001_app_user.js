import bcrypt from "bcrypt";

export async function seed(knex) {
  // ✅ delete in correct order (avoid FK errors)
  await knex("order_item").del();
  await knex("customer_order").del();
  await knex("cart_item").del();
  await knex("cart").del();

  // now safe to delete users
  await knex("app_user").del();

  // ✅ hash passwords
  const passwords = await Promise.all([
    bcrypt.hash("password123", 10),
    bcrypt.hash("securepass456", 10),
    bcrypt.hash("mike@2026", 10),
    bcrypt.hash("emilyPass789", 10),
    bcrypt.hash("aliSecure321", 10),
  ]);

  // ✅ IMPORTANT: add explicit IDs
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      mobile: 4512345678,
      password: passwords[0],
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      mobile: 4522334455,
      password: passwords[1],
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      mobile: 4533445566,
      password: passwords[2],
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      mobile: 4544556677,
      password: passwords[3],
    },
    {
      id: 5,
      name: "Ali Khan",
      email: "ali.khan@example.com",
      mobile: 4555667788,
      password: passwords[4],
    },
  ];

  await knex("app_user").insert(users);
}
