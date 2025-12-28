import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const app = express();

app.use(cors());
app.use(express.json());

// IMPORTANT LINE 👇
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
