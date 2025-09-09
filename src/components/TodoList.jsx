import TodoItem from './TodoItem';

export default function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <ul>
      {(() => {
        if (todos.length > 0) {
          if (todos.length > 5) {
            return todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  toggleTodo={toggleTodo}
                  removeTodo={removeTodo}
                />
              ));
          } else {
            return <li>Not enough todos yet</li>;
          }
        } else {
          return <li>No Todos Yet</li>;
        }
      })()
      }
    </ul>
  );
}
