export function Todos({ todos = [], onToggleComplete }) {
    if (!Array.isArray(todos) || todos.length === 0) {
        return <p style={{ fontFamily: "sans-serif" }}>📝 No todos yet. Add one above!</p>;
    }

    return (
        <div style={{ marginTop: "20px", fontFamily: "sans-serif" }}>
            {todos.map((todo) => (
                <div
                    key={todo.id || todo.title} // unique key for React stability
                    style={{
                        border: "1px solid #ddd",
                        padding: "10px",
                        borderRadius: "8px",
                        marginBottom: "10px",
                        backgroundColor: todo.completed ? "#e8f5e9" : "#fff",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                    }}
                >
                    <h3 style={{ margin: "0 0 5px 0" }}>
                        {todo.title || "(No title)"}
                    </h3>
                    <p style={{ margin: "0 0 10px 0", color: "#555" }}>
                        {todo.description || "(No description)"}
                    </p>

                    <button
                        onClick={() => onToggleComplete && onToggleComplete(todo.id)}
                        disabled={todo.completed}
                        style={{
                            padding: "6px 10px",
                            borderRadius: "6px",
                            border: "none",
                            backgroundColor: todo.completed ? "#28a745" : "#007bff",
                            color: "white",
                            cursor: todo.completed ? "not-allowed" : "pointer",
                        }}
                    >
                        {todo.completed ? "✅ Completed" : "Mark as Complete"}
                    </button>
                </div>
            ))}
        </div>
    );
}
