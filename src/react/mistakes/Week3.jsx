import { useState, useEffect } from "react";

export function App3() {
  const [theme, setTheme] = useState(
    window.localStorage.getItem("theme") || "light"
  );

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
import { Form } from './Form';
import { JobPortal } from './JobPortal';
import { useState, useEffect } from 'react';

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
      <JobPortal jobPositions={jobPositions}/>
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
