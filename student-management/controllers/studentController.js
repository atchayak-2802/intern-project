const students = require("../models/studentModel");

// GET all students
exports.getStudents = (req, res) => {
    res.json(students);
};

// POST new student
exports.addStudent = (req, res) => {

    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age,
        course: req.body.course
    };

    students.push(newStudent);

    res.json({
        message: "Student added successfully",
        student: newStudent
    });
};

// PUT update student
exports.updateStudent = (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = req.body.name || student.name;
    student.age = req.body.age || student.age;
    student.course = req.body.course || student.course;

    res.json({
        message: "Student updated successfully",
        student
    });
};

// DELETE student
exports.deleteStudent = (req, res) => {

    const id = parseInt(req.params.id);

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const deletedStudent = students.splice(index, 1);

    res.json({
        message: "Student deleted successfully",
        deletedStudent
    });
};