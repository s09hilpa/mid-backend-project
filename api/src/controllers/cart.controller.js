import db from "../configs/database.js";

/**
 * GET /api/cart
 */
export const getCart = async (req, res) => {
  const userId = req.user.userId;

  let cart = await db("cart")
    .where({
      user_id: userId,
      is_active: true,
    })
    .first();

  if (!cart) {
    [cart] = await db("cart")
      .insert({
        user_id: userId,
        is_active: true,
      })
      .returning("*");
  }

  const items = await db("cart_item").where({
    cart_id: cart.id,
  });

  res.json({
    cart_id: cart.id,
    items,
  });
};

/**
 * POST /api/cart/items
 */
export const addCartItem = async (req, res) => {
  const userId = req.user.userId;
  const { eventId, quantity } = req.body;

  let cart = await db("cart")
    .where({
      user_id: userId,
      is_active: true,
    })
    .first();

  if (!cart) {
    [cart] = await db("cart")
      .insert({
        user_id: userId,
        is_active: true,
      })
      .returning("*");
  }

  const event = await db("event").where({ id: eventId }).first();

  if (!event) {
    return res.status(404).json({
      message: "Event not found",
    });
  }

  const [item] = await db("cart_item")
    .insert({
      cart_id: cart.id,
      event_id: eventId,
      quantity,
      price: event.price,
    })
    .returning("*");

  res.status(201).json(item);
};

/**
 * PUT /api/cart/items/:itemId
 */
export const updateCartItem = async (req, res) => {
  const { itemId } = req.params;
  const { quantity } = req.body;

  const item = await db("cart_item").where({ id: itemId }).first();

  if (!item) {
    return res.status(404).json({
      message: "Cart item not found",
    });
  }

  await db("cart_item").where({ id: itemId }).update({
    quantity,
  });

  res.json({
    message: "Cart item updated",
  });
};
