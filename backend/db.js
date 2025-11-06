const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://anil:Anilreddy12345@cluster0.zmtbl.mongodb.net/todos");
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);
module.exports = {
    todo
}