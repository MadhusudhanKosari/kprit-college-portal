import express from "express";
import { studentProfile, attendance, marks } from "../data/studentData.js";

const router = express.Router();

// GET student profile
router.get("/profile", (req, res) => {
  res.json(studentProfile);
});

// GET attendance
router.get("/attendance", (req, res) => {
  res.json(attendance);
});

// GET marks
router.get("/marks", (req, res) => {
  res.json(marks);
});

export default router;
