import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleAddTodo = async () => {
        if (!title.trim() || !description.trim()) {
            alert("Please enter both title and description");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/todos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: title,
                    description: description,
                }),
            });

            if (!res.ok) {
                throw new Error(`Server error: ${res.status}`);
            }

            const json = await res.json();
            alert("Todo added successfully");

            // clear input fields after adding
            setTitle("");
            setDescription("");
        } catch (error) {
            console.error(error);
            alert("Failed to add todo. Please try again.");
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br />

            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <br />

            <button onClick={handleAddTodo}>Add a todo</button>
        </div>
    );
}
