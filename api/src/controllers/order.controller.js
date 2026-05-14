import db from "../configs/database.js";

export const getOrders = async (req, res) => {
  const userId = req.user ? req.user.userId : null;

  // guest users should not have orders
  if (!userId) {
    return res.json([]);
  }

  const orders = await db("customer_order").where({
    user_id: userId,
  });

  res.json(orders);
};
//GET SINGLE ORDER
export const getOrderById = async (req, res) => {
  const { orderId } = req.params;

  const order = await db("customer_order").where({ id: orderId }).first();

  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  const items = await db("order_item").where({
    order_id: orderId,
  });

  res.json({ order, items });
};