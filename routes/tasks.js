const express = require("express");
const router = express.Router();
const {
  getAllTask,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

router.get("/", getAllTask);

router.get("/:id", getTask);

router.post("/", createTask);

router.patch("/:id", updateTask);

router.delete("/:id", deleteTask);

// app.get('/api/v1/tasks') - get all the tasks
// app.post('/api/v1/tasks') - create a new task
// app.get('/api/v1/tasks:id') - get single task
// app.patch('/api/v1/tasks/:id') - update task
// app.delete('/api/v1/tasks/:id') - delete task

module.exports = router;
