import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import studentRoutes from "./routes/student.js";
import studentDashboardRoutes from "./routes/studentDashboard.js";
import facultyRoutes from "./routes/facultyDashboard.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/student", studentDashboardRoutes);
app.use("/api/faculty", facultyRoutes);

app.use("/api/auth", authRoutes);
app.use("/api/student", studentRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
