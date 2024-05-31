const API_URL = 'http://localhost:3000/todos';

export const fetchTodos = async () => {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};

export const addTodo = async (newTodoItem) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodoItem),
    });
    return await response.json();
  } catch (error) {
    console.error('Error adding todo:', error);
    throw error;
  }
};

export const deleteTodo = async (id) => {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw error;
  }
};

export const toggleComplete = async (id, completed) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed }),
    });
    return await response.json();
  } catch (error) {
    console.error('Error updating todo:', error);
    throw error;
  }
};
