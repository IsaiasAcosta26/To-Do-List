import React, { useState } from "react";
import { connect } from "react-redux";
import { editTodo, deleteTodo, toggleTodo } from "../redux/actions";

const TodoItem = ({ todo, editTodo, deleteTodo, toggleTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedContent, setEditedContent] = useState(todo.content);
  const [editedDate, setEditedDate] = useState(todo.date);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const editedTodo = {
      ...todo,
      title: editedTitle,
      content: editedContent,
      date: editedDate,
    };
    editTodo(editedTodo);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleToggle = () => {
    const toggledTodo = { ...todo, completed: !todo.completed };
    toggleTodo(toggledTodo);
  };

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setEditedContent(e.target.value);
  };

  const handleDateChange = (e) => {
    setEditedDate(e.target.value);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <div className="todo-item-edit">
          <input type="text" value={editedTitle} onChange={handleTitleChange} />
          <input
            type="text"
            value={editedContent}
            onChange={handleContentChange}
          />
          <input type="date" value={editedDate} onChange={handleDateChange} />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div className="todo-item-actions">
          <h3>{todo.title}</h3>
          <p>{todo.content}</p>
          <p>{todo.date}</p>
          <button className="todo-item-button" onClick={handleEdit}>
            Edit
          </button>
          <button className="todo-item-button" onClick={handleDelete}>
            Delete
          </button>
          <button className="todo-item-button" onClick={handleToggle}>
            {todo.completed ? "Mark as Incomplete" : "Mark as Complete"}
          </button>
        </div>
      )}
    </div>
  );
};

export default connect(null, { editTodo, deleteTodo, toggleTodo })(TodoItem);
