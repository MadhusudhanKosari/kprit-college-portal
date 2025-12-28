import express from "express";
import {
  facultyProfile,
  subjectsHandled,
  studentList
} from "../data/facultyData.js";

const router = express.Router();

router.get("/profile", (req, res) => {
  res.json(facultyProfile);
});

router.get("/subjects", (req, res) => {
  res.json(subjectsHandled);
});

router.get("/students", (req, res) => {
  res.json(studentList);
});

export default router;
