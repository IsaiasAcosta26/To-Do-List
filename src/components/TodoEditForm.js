import React, { useState } from "react";

const TodoEditForm = ({ todo, onSave, onCancel }) => {
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedContent, setEditedContent] = useState(todo.content);
  const [editedDate, setEditedDate] = useState(todo.date);

  const handleSubmit = (e) => {
    e.preventDefault();
    const editedTodo = {
      ...todo,
      title: editedTitle,
      content: editedContent,
      date: editedDate,
    };
    onSave(editedTodo);
  };

  return (
    <form className="todo-edit-form" onSubmit={handleSubmit}>
      <input
        className="edit-input"
        type="text"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
      />
      <input
        className="edit-input"
        type="text"
        value={editedContent}
        onChange={(e) => setEditedContent(e.target.value)}
      />
      <input
        className="edit-input"
        type="date"
        value={editedDate}
        onChange={(e) => setEditedDate(e.target.value)}
      />
      <button className="edit-button" type="submit">
        Save
      </button>
      <button className="edit-button" type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default TodoEditForm;
