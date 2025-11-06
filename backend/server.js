const express = require("express");
const { createTodo } = require("./types");
const { parse } = require("zod");
const app = express();

app.use(express.json());

app.post("/todo", (req, res) => {
    const createparseload = req.body;
    const parseload = createTodo.safeParse(createparseload);
    if (!parseload.success) {
        res.status(403).json({
            msg: "you have some wrong inputs",
        })
        return;
    }
});

app.get("/todos", (req, res) => {

});

app.put("/completed", (req, res) => {
    const updateparseload = req.body;
    const uparseload = createTodo.safeParse(createparseload);
    if (!uparseload.success) {
        res.status(403).json({
            msg: "you have updated wrong inputs",
        })
        return;
    }
});

app.listen(3000, () => {
    console.log("Server is Running on port 3000");
})