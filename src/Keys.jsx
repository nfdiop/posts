// Return a component that is going to render a list of todos
// stored in state. Each todo should be editable and deletable.
//
import { useState } from "react";

export function TodoApp() {
  const [todos, setTodos] = useState([]);
  const handleTodoAdd = (newTodo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { name: newTodo, id: Math.random() },
    ]);
  };

  return (
    <>
      <Form onTodoAdd={handleTodoAdd} />
      <TodoList todos={todos} />
    </>
  );
}

export function Form({ onTodoAdd }) {
  const [value, setValue] = useState("");
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onTodoAdd(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={handleInputChange} />
      <button type="submit">Add</button>
    </form>
  );
}

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo todo={todo} />
        </li>
      ))}
    </ul>
  );
}

// This component should render the todo name and two buttons:
// one to delete the todo and another to edit it. When the edit
// button is clicked, the todo should be replaced with an input
function Todo({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(todo.name);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleDelete = () => {
    // Implement this
  };

  return (
    <div>
      {isEditing ? (
        <input value={value} onChange={(e) => setValue(e.target.value)} />
      ) : (
        <span>{todo.name}</span>
      )}
      <button onClick={isEditing ? handleSave : handleEdit}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
