import { useState, useEffect, useRef } from "react";

export function ToDoApp({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={Math.random()}>{todo.name}</li>
      ))}
    </ul>
  );
}

export function App({ todos }) {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetchTodos().then((todos) =>
      setTodos(todos.map((todo) => ({ name: todo, id: Math.random() })))
    );
  }, []);
  return <ToDoApp todos={todos} />;
}

function fetchTodos() {}

function Form() {
  const ref = useRef(null);
  const focus = () => {
    ref.current?.focus();
  };

  return (
    <form>
      <Input ref={ref} />
      <button type="button" onClick={focus}>
        Focus
      </button>
    </form>
  );
}

const Input = function _Input(props, ref) {
  return <input {...props} ref={ref} />;
};

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const handleTodoAdd = (newTodo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { name: newTodo, id: Math.random() },
    ]);
  };

  function TodoList() {
    return (
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    );
  }

  return <TodoList todos={todos} onTodoAdd={handleTodoAdd} />;
}

function App() {
  const timeRef = useRef(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      timeRef.current = new Date();
    }, 1_000);
    return () => clearInterval(intervalId);
  }, []);

  return <>Current time {timeRef.current.toLocaleTimeString()}</>;
}

import { List } from "./List";

function App({ items }) {
  return items.length && <List items={items} />;
}

export function App3() {
  const [theme, setTheme] = useState(
    window.localStorage.getItem("theme") || "light"
  );
  const posts = [1, 2, 3]

  useEffect(() => {
    listenToThemeChange(setTheme);
  }, []);

  return (
    <div className={`App ${theme}`}>
      <Sidebar user={appState.user} />
      <Posts />
    </div>
  );
}

let name = "Ndeye Fatou Diop";
console.log("🚀 ~ name:", name)

function useTheme() {}

function computeAppState({ updateAppState }) {}

export function Dashboard1({ user, posts }) {
  useEffect(() => {
    sendLogs({ event: "page_view", page: "dashboard" });
  });

  return (
    <>
      <Sidebar user={user} />
      <Posts posts={posts} />
    </>
  );
}
import { Form } from "./Form";
import { JobPortal } from "./JobPortal";
import { useState, useEffect } from "react";

export function App({ jobPositions }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const formState = { name, email };

  useEffect(() => {
    console.log("New form state", formState);
  }, [formState]);

  return (
    <>
      <h1>Apply for a job</h1>
      <Form
        name={name}
        email={email}
        onNameChange={setName}
        onEmailChange={setEmail}
      />
      <JobPortal jobPositions={jobPositions} />
    </>
  );
}

function Sidebar() {}

function Posts() {}

function Form() {}

export function Timer() {
  const [time, setTime] = useState(new Date());
  const [intervalId, setIntervalId] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1_000);
    setIntervalId(intervalId);
    return () => clearInterval(intervalId);
  }, []);

  const stopTimer = () => {
    intervalId && clearInterval(intervalId);
  };

  return (
    <>
      <>Current time: {time.toLocaleTimeString()}</>
      <button onClick={stopTimer}>Stop timer</button>
    </>
  );
}

export function App() {
  const [value, setValue] = useState("");

  const handleInputChange = (value) => {
    setValue(value);
  };

  return <Form inputValue={value} onInputChange={handleInputChange} />;
}

export function App2() {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [status, setStatus] = useState("all");

  const handleFiltersChange = (filters) => {
    setStartDate(filters.startDate);
    setEndDate(filters.endDate);
    setSearchTerm(filters.searchTerm);
    setStatus(filters.status);
  };

  const filters = { searchTerm, startDate, endDate, status };

  return (
    <TodoList
      todos={todos}
      filters={filters}
      onTodosChange={setTodos}
      onFiltersChange={handleFiltersChange}
    />
  );
}

function TodoList() {}

function fetchTodos() {}

export function App1() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
    alert(`Next counter value: ${counter}`);
  };

  return (
    <>
      <span>{counter}</span>
      <button onClick={increment}>++</button>
    </>
  );
}
