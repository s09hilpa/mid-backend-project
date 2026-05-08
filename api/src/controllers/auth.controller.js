import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../configs/database.js";
import { SignupSchema, LoginSchema } from "../schemas/auth.schema.js";
const JWT_SECRET = process.env.JWT_SECRET || "secret_key";

/**
 * POST /api/auth/signup
 */
export const signup = async (req, res) => {
  const validatedData = SignupSchema.parse(req.body);

  const { name, email, mobile, password } = validatedData;

  const hashedPassword = await bcrypt.hash(password, 10);

  const [user] = await db("app_user")
    .insert({
      name,
      email,
      mobile,
      password: hashedPassword,
    })
    .returning(["id", "name", "email", "mobile"]);

  res.status(201).json(user);
};

/**
 * POST /api/auth/login
 */
export const login = async (req, res) => {
  const validatedData = LoginSchema.parse(req.body);

  const { email, password } = validatedData;

  const user = await db("app_user").where({ email }).first();

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "1d",
  });

  res.json({ token });
};

/**
 * GET /api/auth/me
 */
export const me = async (req, res) => {
  res.json(req.user);
};
