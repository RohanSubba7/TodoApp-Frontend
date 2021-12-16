import React from "react";

function TodoItem({ todo }) {
  return (
    <div>
      <h1>{todo.task_name}</h1>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default TodoItem;
