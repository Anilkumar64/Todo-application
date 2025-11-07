import { useState } from "react";

export function CreateTodo() {
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");

    return (
        <div>
            <input type="text" placeholder="title" onChange={(e) => { settitle(e.target.value); }} /><br />
            <input type="text" placeholder="description" onChange={(e) => { setdescription(e.target.value) }} /><br />

            <button onClick={() => {
                fetch("http://localhost:3000/todos", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        title: title,
                        description: description
                    })
                })
                    .then(async (res) => {
                        const json = await res.json();
                        alert("todo added");
                    })
            }}>Add a todo</button>

        </div >
    );
}