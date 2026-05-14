import db from "../configs/database.js";

/**
 * GET /api/cart
 */
export const getCart = async (req, res) => {
  let cart;

  // logged-in user
  if (req.user) {
    cart = await db("cart")
      .where({
        user_id: req.user.userId,
        is_active: true,
      })
      .first();
  } else {
    // guest user
    cart = await db("cart")
      .where({
        user_id: null,
        is_active: true,
      })
      .first();
  }

  // create guest cart if missing
  if (!cart) {
    [cart] = await db("cart")
      .insert({
        user_id: req.user ? req.user.userId : null,
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
  const userId = req.user ? req.user.userId : null;

  const { eventId, quantity } = req.body;

  if (!eventId || !quantity) {
    return res.status(400).json({
      message: "eventId and quantity are required",
    });
  }

  // find active cart
  let cart = await db("cart")
    .where({
      user_id: userId,
      is_active: true,
    })
    .first();

  // create cart if missing
  if (!cart) {
    [cart] = await db("cart")
      .insert({
        user_id: userId,
        is_active: true,
      })
      .returning("*");
  }

  // find event
  const event = await db("event").where({ id: eventId }).first();

  if (!event) {
    return res.status(404).json({
      message: "Event not found",
    });
  }

  // insert item
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
//DELETE CART ITEM

export const deleteCartItem = async (req, res) => {
  const { itemId } = req.params;

  const item = await db("cart_item").where({ id: itemId }).first();

  if (!item) {
    return res.status(404).json({ message: "Cart item not found" });
  }

  await db("cart_item").where({ id: itemId }).del();

  res.json({ message: "Cart item deleted" });
};
//CHECKOUT
export const checkout = async (req, res) => {
  const userId = req.user?.userId || null;

  return await db.transaction(async (trx) => {
    // 1. get cart
    const cart = await trx("cart")
      .where({
        user_id: userId,
        is_active: true,
      })
      .first();

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // 2. get items
    const items = await trx("cart_item").where({
      cart_id: cart.id,
    });

    if (items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    // 3. total price
    const total = items.reduce(
      (sum, i) => sum + Number(i.price) * i.quantity,
      0,
    );

    // 4. create order
    const [order] = await trx("customer_order")
      .insert({
        user_id: userId,
        total_price: total,
        currency: "EUR",
      })
      .returning("*");

    // 5. insert order items
    const orderItems = items.map((i) => ({
      order_id: order.id,
      event_id: i.event_id,
      quantity: i.quantity,
      price: i.price,
    }));

    await trx("order_item").insert(orderItems);

    // 6. clear cart
    await trx("cart_item").where({ cart_id: cart.id }).del();

    res.json({
      message: "Checkout successful",
      order,
    });












  });
};