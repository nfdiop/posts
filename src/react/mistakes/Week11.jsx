
// 58. Forgetting to use parentheses when returning object on function

function App() {
  const [{ email, password }, setState] = useState({
    email: "",
    password: "",
  });

  const createChangeHandler = (field) => {
    return (event) => {
      setState((prevState) => {
        ...prevState,
        [field]: event.target.value,
      });
    };
  };

  return (
    <div className="App">
      <p>
        Email:{" "}
        <input
          type="email"
          value={email}
          onChange={createChangeHandler("email")}
        />
      </p>
      <p>
        Password:{" "}
        <input
          type="password"
          value={password}
          onChange={createChangeHandler("password")}
        />
      </p>
    </div>
  );
}

// 59. Missing whitespaces between JSX elements
const Dashboard = ({ user }) => {
  return (
    <div>
      Welcome back {user.name}!
      <a href="/connect">Sign up/Log in</a>
    </div>
  );
};

// 60. Passing a key to fragment shorthand
function List({ users }) {
  return (
    <div className="list">
      {users.map((user) => (
        <Fragment key={user.id}>
          <span>{user.name}</span>
          <em>{user.occupation}</em>
        </Fragment>
      ))}
    </div>
  );
}
