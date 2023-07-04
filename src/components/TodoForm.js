import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = generateUniqueId(); // Genera un ID único
    const todo = {
      id,
      title,
      content,
      date,
      completed: false,
    };
    addTodo(todo);
    setTitle("");
    setContent("");
    setDate("");
  };

  // Función para generar un ID único utilizando la fecha actual en milisegundos
  const generateUniqueId = () => {
    return Date.now().toString();
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="todo-input"
        type="text"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        className="todo-input"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button className="todo-button" type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default connect(null, { addTodo })(TodoForm);
