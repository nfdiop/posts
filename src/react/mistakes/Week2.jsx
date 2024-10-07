import { useState, useEffect } from "react";

export function MyComponent9({ todos, onClearTodos }) {
  return <List todos={todos} onClearTodos={onClearTodos()} />;
}

export function MyComponent({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li>{todo.name}</li>
      ))}
    </ul>
  );
}

export function Form0() {
  const [value, setValue] = useState();
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  return <input value={value} onChange={handleInputChange} />;
}

export function App() {
  const [todos, setTodos] = useState([]);
  const handleTodoAdd = (newTodo) => {
    todos.push(newTodo);
    setTodos(todos);
  };
  return <TodoApp todos={todos} onTodoAdd={handleTodoAdd} />;
}

function TodoApp() {}

export function Form() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);

  const handleResetPosition = () => {
    setX(0);
    setY(0);
    setZ(0);
  };

  const handlePositionChange = (_x, _y, _z) => {
    setX(_x);
    setY(_y);
    setZ(_z);
  }

  return (
    <Point
      position={{ x, y, z }}
      onResetPosition={handleResetPosition}
      handlePositionChange={handlePositionChange}
    />
  );
}

function Point() {}

export function Form1() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasName] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    setName(`${firstName} ${lastName}`);
  }, [firstName, lastName]);

  // Rest of the component code below
  // (ignored to keep the snippet short 😀)
  // ...
}
