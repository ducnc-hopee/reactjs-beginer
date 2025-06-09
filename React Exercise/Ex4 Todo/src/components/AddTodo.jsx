import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export const AddTodo = ({ handleAddNewTodo }) => {
  const todoRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = todoRef.current.value;
    handleAddNewTodo({
      id: uuidv4(),
      text: newTodo,
      done: false,
    });
    clearInput();
  };

  const clearInput = () => {
    todoRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="todoName"
        type="text"
        placeholder="Add a new todo"
        ref={todoRef}
      />
      <button type="submit">Add</button>
    </form>
  );
};
