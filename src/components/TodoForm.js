import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";

const TodoForm = (id) => {
  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState("");
  const [editTodoData, setEditTodoData] = useState(null);

  useEffect(() => {
    getTodos();
    console.log(todos);
  }, []);

  useEffect(() => {
    if (editTodoData) {
      setTodoName(editTodoData.task_name ? editTodoData.task_name : "");
    }
  }, [editTodoData]);

  console.log("id", editTodoData);
  async function getTodos() {
    const data = await axios.get("/api/tasklist");
    console.log(data.data);
    setTodos(data.data);
  }

  const editTodos = (todosData) => {
    setEditTodoData(todosData);
    console.log("nooooooooooooooooooooooooooob", todosData);
  };

  async function addTodos(e) {
    e.preventDefault();

    const todoData = {
      task_name: todoName ? todoName : undefined,
    };

    //Only post if the editTodoData is not provided
    if (!editTodoData) {
      await axios.post("/api/posttask", todoData);
    } else {
      //Update the data if we do have the editTodoData
      await axios.patch(`/api/updatetask/${editTodoData._id}`, todoData);
    }

    setTodoName("");
    getTodos();
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
            {editTodoData ? <div>Edit Item</div> : <div>Add Item</div>}
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
        return (
          <TodoItem
            key={i}
            getTodos={getTodos}
            editTodos={editTodos}
            todo={todo}
          />
        );
      })}
    </div>
  );
};

export default TodoForm;
