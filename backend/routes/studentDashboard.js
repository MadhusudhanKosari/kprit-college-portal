import express from "express";
import {
  studentInfo,
  attendance,
  marks,
  notifications
} from "../data/studentDashboard.js";

const router = express.Router();

router.get("/info", (req, res) => {
  res.json(studentInfo);
});

router.get("/attendance", (req, res) => {
  res.json(attendance);
});

router.get("/marks", (req, res) => {
  res.json(marks);
});

router.get("/notifications", (req, res) => {
  res.json(notifications);
});

export default router;
