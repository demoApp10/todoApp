export default function AddTodo({ newTodo, handleChange, addTodo }) {
  return (
    <div>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}