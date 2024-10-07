import { useState, useEffect, useMemo } from "react";

function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1_000);
  }, []);

  return <>Time: {time.toLocaleTimeString()}</>;
}

import { filterTodos } from './todoUtils';

function TodoList({ todos, filters }) {
  const filteredTodos = useMemo(() =>
    filters != null ? filterTodos(todos, filters) : todos
  );

  return filteredTodos.length === 0 ? (
    <>Good job!</>
  ) : (
    <ul>
      {filteredTodos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
function filterTodos(todos, filters) {
  return todos.filter(
    (todo) => filters.completed != null && todo.completed === filters.completed
  );
}

function TodoList({ todos }) {
  const todosCount = useMemo(() => todos.length, [todos]);

  return (
    <div>
      <h4>Total Todos: {todosCount}</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}


import { useEffect, useState, useMemo } from "react";
import { sendLogs } from './logUtils';
import { getTheme, subscribeThemeChange } from './theme';

function Dashboard({ user }) {
  const [theme, setTheme] = useState(getTheme);

  const handleThemeChange = useMemo((newTheme) => {
    setTheme(newTheme);
    sendLogs({ type: "theme", theme: newTheme, userId: user.id });
  }, [user.id]);

  useEffect(
    () => subscribeThemeChange(handleThemeChange),
    [handleThemeChange]
  );

  return (
    <div className={`App ${theme}`}>
      Hello {user.name}!
    </div>
  );
}

import { useEffect, useState, useCallback } from "react";
import { sendLogs } from './logUtils';
import { getTheme, subscribeThemeChange } from './theme';

function Dashboard({ user }) {
  const [theme, setTheme] = useState(getTheme);

  const handleThemeChange = useCallback((newTheme) => {
    setTheme(newTheme);
    sendLogs({ type: "theme", theme: newTheme, userId: user.id });
  });

  useEffect(
    () => subscribeThemeChange(handleThemeChange),
    [handleThemeChange]
  );

  return (
    <div className={`App ${theme}`}>
      Hello {user.name}!
    </div>
  );
}

import { memo } from 'react';
import { Sidebar } from ' /Sidebar'
import { Content } from './Content'

export const Dashboard = memo(({ user, posts }) => {
  return (
    <div>
      <h2>Welcome {user.name}</h2>
      <Sidebar />
      <Content posts={posts} />
    </div>
  );
});
