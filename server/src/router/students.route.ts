import express from "express";

import { createStudent, deleteStudent, getStudents, updateStudent } from "../controllers/students";

// const router = express.Router();

export default (router: express.Router) => {
  router.get("/api/v1/getStudent", getStudents);
  router.post("/api/v1/postStudent", createStudent);
  router.patch("/api/v1/updateStudent/:id", updateStudent);

  router.delete("/api/v1/deleteStudent/:id", deleteStudent);
};
