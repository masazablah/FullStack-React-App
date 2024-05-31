import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id, !todo.completed)}
        className="checkbox"
      />
      {todo.title}
      <button className="delete-button" onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
