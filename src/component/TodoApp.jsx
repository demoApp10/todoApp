import { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';


function TodoApp() {
  var [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build Todo App', completed: false },
  ]);
  var [newTodo, setNewTodo] = useState('');

  function handleChange(e) {
    setNewTodo(e.target.value);
  }

  function addTodo() {
    var newTodoItem = {
      id: todos.length + 1,
      text: newTodo,
      completed: false,
    };
    if (newTodo != '') {
      setTodos(todos.concat(newTodoItem));
      setNewTodo('');
    }
  }

  function toggleTodo(id) {
    var updatedTodos = todos.map(function(todo) {
      return todo.id == id ? { ...todo, completed: !todo.completed } : todo;
    });
    setTodos(updatedTodos);
  }

  function removeTodo(id) {
    var filteredTodos = todos.filter(function(todo) {
      return todo.id != id;
    });
    setTodos(filteredTodos);
  }

  var todosList = todos && todos.length > 0 ? todos : [];
  return (
    <div>
      <h1>Todo App</h1>
      <AddTodo newTodo={newTodo} handleChange={handleChange} addTodo={addTodo} />
      <TodoList todos={todosList} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default TodoApp;