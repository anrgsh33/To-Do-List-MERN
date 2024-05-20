import express from "express";
import Connection from "./database/db.js";
import cors from "cors";
import Todo from "./models/todo.js";
const app = express();
app.use(express.json());

app.use(cors());

Connection();

app.post("/add", async (req, res) => {
  try {
    const { task } = req.body;
    const newTodo = new Todo({ task });
    await newTodo.save();
    res.status(201).json({ msg: "Data saved successfully", newTodo });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get("/gettodos", async (req, res) => {
  try {
    const todos = await Todo.find(); // Fetch all todos from the database
    res.status(200).json(todos);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
app.listen(5000, () => {
  console.log("Server is running on port 5000...");
});
