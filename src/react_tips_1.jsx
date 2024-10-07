import classNames from "classnames";

classNames("button", "active"); // => 'button active'
classNames("button", { active: true }); // => 'button active'
classNames({ "button-active": true }); // => 'button-active'
classNames({ "button-active": false }); // => ''

// Use self-closing tags for components
// ❌ Bad: too verbose
{
  /* <MyComponent></MyComponent>

// ✅ Good
<MyComponent/> */
}

// Prefer fragments over DOM nodes (e.g., div, span, etc.) to group elements
// // ❌ Bad: too verbose
// <Fragment>
//     <Header />
//     <Main />
// </Fragment>

// // ✅ Good: more concise
// <>
//    <FirstChild />
//    <SecondChild />
// </>

// Prefer spreading props over accessing each one individually
// We do `props…` all over the code.
// ❌ Bad: The code below is harder to read (especially at scale).
function TodoList(props) {
  return (
    <div>
      {props.todos.map((todo) => (
        <div key={todo}>
          <button
            onClick={() => props.onSelectTodo(todo)}
            style={{
              backgroundColor: todo === props.selectedTodo ? "gold" : undefined,
            }}
          >
            <span>{todo}</span>
          </button>
        </div>
      ))}
    </div>
  );
}

// ✅ Good: The code below is more concise.
function TodoList({ todos, selectedTodo, onSelectTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo}>
          <button
            onClick={() => onSelectTodo(todo)}
            style={{
              backgroundColor: todo === selectedTodo ? "gold" : undefined,
            }}
          >
            <span>{todo}</span>
          </button>
        </div>
      ))}
    </div>
  );
}

// You can set all your defaults in one place at the top. This makes it easy for someone to locate them.
function Button({
  onClick,
  text = "Click here",
  small = false,
  colorScheme = "light",
}) {
  return (
    <button
      onClick={onClick}
      style={{
        color: colorScheme === "dark" ? "white" : "black",
        fontSize: small ? "12px" : "16px",
      }}
    >
      {text}
    </button>
  );
}
