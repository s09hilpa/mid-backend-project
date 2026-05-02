import knex from "#configs/database.js";

export async function getAllEvents({ page, pageSize, q }) {
  const safePage = page || 1;
  const offset = (safePage - 1) * pageSize;

  let query = knex("event");

  if (q && q.trim() !== "") {
    query = query.whereILike("title", `%${q}%`);
  }

  const totalResult = await query.clone().count("* as count").first();
  const totalItems = Number(totalResult.count);

  const data = await query.select("*").limit(pageSize).offset(offset);

  return {
    data,
    meta: {
      page: safePage,
      pageSize,
      totalItems,
      totalPages: Math.ceil(totalItems / pageSize),
    },
  };
}

export async function getEventById(id) {
  return knex("event").where({ id }).first();
}
