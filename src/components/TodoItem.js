import React from "react";
import axios from "axios";

function TodoItem({ todo, getTodos, editTodos }) {
  const deleteTodo = async (id) => {
    await axios.delete(`/api/deletetask/${id}`).then(() => getTodos());
  };
  return (
    <div>
      <h1 style={{ color: "white" }}>{todo.task_name}</h1>
      <button onClick={() => editTodos(todo)}>Edit</button>
      <button onClick={() => deleteTodo(todo._id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
