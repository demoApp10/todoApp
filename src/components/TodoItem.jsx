export default function TodoItem({ todo, toggleTodo, removeTodo }) {
  console.log('Rendering TodoItem:', todo);
  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </li>
  );
}
