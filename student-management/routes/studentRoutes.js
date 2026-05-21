
const express = require("express");

const router = express.Router();

const studentController = require("../controllers/studentController");

// GET
router.get("/students", studentController.getStudents);

// POST
router.post("/students", studentController.addStudent);

// PUT
router.put("/students/:id", studentController.updateStudent);

// DELETE
router.delete("/students/:id", studentController.deleteStudent);

module.exports = router;