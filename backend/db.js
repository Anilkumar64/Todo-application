const mongoose = require("mongoose");

// connect to MongoDB
mongoose.connect("mongodb+srv://anil:Anilreddy12345@cluster0.zmtbl.mongodb.net/todos");

// define schema with default for completed
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
});

// create model
const todo = mongoose.model("todos", todoSchema);

// export model
module.exports = {
    todo
};
