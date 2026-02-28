import db from "#configs/database.js";

const TABLE = "event";

/**
 * Returns a base query builder for the event table.
 *
 * @param {import("knex").Knex} [trx=db] - Optional transaction
 * @returns {import("knex").Knex.QueryBuilder}
 */
function baseQuery(trx = db) {
    return trx(TABLE);
}

/**
 * Applies common event filters to a query builder.
 *
 * This helper ensures filtering logic is defined in one place
 * and reused by both list and count queries.
 *
 * @param {import("knex").Knex.QueryBuilder} qb
 * @param {Object} filters
 * @param {string} [filters.currency]
 * @param {number} [filters.minPrice]
 * @param {number} [filters.maxPrice]
 * @param {string} [filters.search]
 *
 * @returns {import("knex").Knex.QueryBuilder}
 */
function applyEventFilters(qb, filters = {}) {
    if (filters.currency) {
        qb.where("currency", filters.currency);
    }

    if (filters.minPrice != null) {
        qb.where("price", ">=", filters.minPrice);
    }

    if (filters.maxPrice != null) {
        qb.where("price", "<=", filters.maxPrice);
    }

    // Portable case-insensitive search (pg/mysql/sqlite)
    if (filters.search) {
        const q = `%${String(filters.search).toLowerCase()}%`;

        qb.where((builder) => {
            builder
                .whereRaw("LOWER(title) LIKE ?", [q])
                .orWhereRaw("LOWER(description) LIKE ?", [q]);
        });
    }

    return qb;
}

/**
 * Count events matching optional filters.
 *
 * Used for pagination metadata (totalItems / totalPages).
 *
 * @param {Object} [filters={}]
 * @param {Object} [options={}]
 * @param {import("knex").Knex} [options.trx] - Optional transaction
 *
 * @returns {Promise<number>} Total matching rows
 */
export async function countEvents(filters = {}, options = {}) {
    const { trx } = options;

    const qb = applyEventFilters(baseQuery(trx), filters);

    const row = await qb.count({ count: "*" }).first();

    // PostgreSQL returns string counts, normalize across dialects
    const count = row?.count ?? row?.["count(*)"] ?? 0;

    return Number(count);
}

/**
 * List events with optional filters and offset-based pagination.
 *
 * NOTE:
 * - Supports limit + offset only.
 * - Page calculation should be handled at API/controller level.
 *
 * @param {Object} [filters={}]
 * @param {string} [filters.currency]
 * @param {number} [filters.minPrice]
 * @param {number} [filters.maxPrice]
 * @param {string} [filters.search]
 *
 * @param {Object} [options={}]
 * @param {number} [options.limit]
 * @param {number} [options.offset]
 * @param {string} [options.orderBy="id"]
 * @param {"asc"|"desc"} [options.order="asc"]
 * @param {import("knex").Knex} [options.trx]
 *
 * @returns {Promise<Array<Object>>}
 */
export async function listEvents(filters = {}, options = {}) {
    const {
        limit,
        offset,
        orderBy = "id",
        order = "asc",
        trx,
    } = options;

    const qb = applyEventFilters(
        baseQuery(trx).select("*"),
        filters
    );

    qb.orderBy(
        orderBy,
        String(order).toLowerCase() === "desc" ? "desc" : "asc"
    );

    if (limit != null) qb.limit(limit);
    if (offset != null) qb.offset(offset);

    return qb;
}

/**
 * Find a single event by id.
 *
 * @param {number|string} id
 * @param {Object} [options={}]
 * @param {import("knex").Knex} [options.trx]
 *
 * @returns {Promise<Object|null>}
 */
export async function findEventById(id, { trx } = {}) {
    const row = await baseQuery(trx)
        .where({ id })
        .first();

    return row ?? null;
}

/**
 * Create a new event.
 *
 * TODO:
 * - Validate input
 * - Insert row
 * - Return created row (dialect-safe)
 */
export async function createEvent() {
    throw new Error("TODO: createEvent is not implemented yet");
}

/**
 * Update an existing event by id.
 *
 * TODO:
 * - Validate patch fields
 * - Perform update
 * - Return updated row (or null if not found)
 */
export async function updateEvent() {
    throw new Error("TODO: updateEvent is not implemented yet");
}

/**
 * Delete an event by id.
 *
 * TODO:
 * - Delete row
 * - Return true/false depending on whether a row was deleted
 */
export async function deleteEvent() {
    throw new Error("TODO: deleteEvent is not implemented yet");
}