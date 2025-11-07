const express = require("express");
const { createTodo } = require("./types");
const { parse } = require("zod");
const { todo } = require("./db");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());




app.post("/todo", async (req, res) => {
    const createparseload = req.body;
    const parseload = createTodo.safeParse(createparseload);
    if (!parseload.success) {
        res.status(403).json({
            msg: "you have some wrong inputs",
        });
        return;
    }
    await todo.create({
        title: createparseload.title,
        description: createparseload.description,
        completed: false,
    })
    res.json({
        msg: "todo created",
    })
});

app.get("/todos", async (req, res) => {
    const todos = await todo.find({});
    res.status(200).json(todos);
});

app.put("/completed", async (req, res) => {
    const updateparseload = req.body;
    const uparseload = createTodo.safeParse(updateparseload);
    if (!uparseload.success) {
        res.status(403).json({
            msg: "you have updated wrong inputs",
        });
        return;
    }
    await todo.update({
        _id: req.body.id,
    },
        {
            completed: true,
        })
    res.json({
        msg: "Todo Marked as completed",
    })
});

app.listen(3000, () => {
    console.log("Server is Running on port 3000");
});