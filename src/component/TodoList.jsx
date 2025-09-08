import TodoItem from './TodoItem';

export default function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <ul>
      {todos.length > 0
        ? todos.map(function(todo) {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
              />
            );
          })
        : <li>No Todos Yet</li>}
    </ul>
  );
}
