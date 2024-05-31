import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Search from './components/Search';
import { fetchTodos, addTodo, deleteTodo, toggleComplete } from './utils/api';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const loadTodos = async () => {
      const data = await fetchTodos();
      setTodos(data);
    };
    loadTodos();
  }, []);

  const handleAddTodo = async (newTodoItem) => {
    const data = await addTodo(newTodoItem);
    setTodos([...todos, data]);
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleComplete = async (id, completed) => {
    const data = await toggleComplete(id, completed);
    setTodos(todos.map(todo => (todo.id === id ? data : todo)));
  };

  const filteredTodos = todos.filter(todo =>
    todo.title && todo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>TODO List</h1>
      <div className="form-container">
      <button onClick={() => fetchTodos().then(setTodos)}>Fetch Todos</button>
      </div>
      <div className="form-container">
      <AddTodo addTodo={handleAddTodo} />
      </div>
      <div className="search-container">
      <Search search={search} setSearch={setSearch} />
      </div>
      <TodoList
        todos={filteredTodos}
        toggleComplete={handleToggleComplete}
        deleteTodo={handleDeleteTodo}
      />
      <div className="footer">
        <p>Total TODOs: <span>{filteredTodos.length}</span></p>
      </div>
    </div>
  );
};

export default App;
