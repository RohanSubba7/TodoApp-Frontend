import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";

const TodoForm = () => {
  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState("");

  useEffect(() => {
    getTodos();
    console.log(todos);
  }, []);

  async function getTodos() {
    const data = await axios.get("/api/tasklist");
    console.log(data.data);
    setTodos(data.data);
  }

  async function addTodos(e) {
    e.preventDefault();

    const todoData = {
      task_name: todoName ? todoName : undefined,
    };

    await axios.post("/api/posttask", todoData);

    setTodoName("");
  }

  const renderTodos = () => {
    return;
  };

  const insertTodos = () => {
    return (
      <div className="Texteditor">
        <form onSubmit={addTodos}>
          <div className="input-control">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              value={todoName}
              onChange={(e) => setTodoName(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-btn">
            Add Item
          </button>
        </form>
      </div>
    );
  };

  return (
    <div>
      {insertTodos()}
      {renderTodos()}
      {todos.map((todo, i) => {
        return <TodoItem key={i} todo={todo} />;
      })}
    </div>
  );
};

export default TodoForm;
