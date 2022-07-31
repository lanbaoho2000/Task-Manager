const getAllTask = (req, res) => {
  res.send("get all tasks");
};

const createTask = (req, res) => {
  const { name } = req.body;
  res.send(name);
};

const getTask = (req, res) => {
  const { id } = req.params;
  res.json({ id: id });
};

const updateTask = (req, res) => {
  res.send("update task");
};

const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
