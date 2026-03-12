import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEditNote } from "react-icons/md";

const Todo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // function to handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  // function to edit todo
  const handleEdit = (index) => {
    setNewTodo(todos[index]); // put todo text into input

    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1); // remove old todo

    setTodos(updatedTodos);
  };

  // function to delete todos
  const handleDelete = (index) => {
    const updatedTodo = [...todos];
    updatedTodo.splice(index, 1);
    setTodos(updatedTodo);
  };

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center py-4">
      <h1 className="text-white text-center text-4xl font-bold">Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="bg-white/10 text-white outline-none border border-white rounded-full py-2 px-6 mt-4 w-96"
          type="text"
          placeholder="Add new todos..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          type="submit"
          className="bg-white/40 text-white rounded-full py-2 px-4 ml-4 border border-white cursor-pointer hover:bg-white/30 transition-all active:scale-95"
        >
          Add Todo
        </button>
      </form>

      {/* todo container */}
      <div
        id="todo"
        className="mt-8 h-100 w-220 bg-white/20 flex flex-col items-center gap-4 py-4 overflow-y-auto"
      >
        {todos.map((todo, index) => (
          // todo items list
          <div
            key={index}
            className="w-200 bg-black/60 py-2 px-4 rounded-xs flex items-center justify-between"
          >
            <p>{todo}</p>
            <div className="flex gap-4 px-4">
              <button onClick={() => handleEdit(index)}>
                <MdEditNote color="white" className="cursor-pointer" />
              </button>
              <button onClick={() => handleDelete(index)}>
                <MdDelete color="rgb(240, 41, 41)" className="cursor-pointer" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
