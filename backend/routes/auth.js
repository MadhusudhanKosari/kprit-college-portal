import express from "express";
import { users } from "../data/users.js";

const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password, role } = req.body;

  const user = users.find(
    (u) =>
      u.email === email &&
      u.password === password &&
      u.role === role
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({
    message: "Login successful",
    user,
  });
});

export default router;
