
// 63. Having a component have an internal state but also the state present in the parent
function Parent() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Counter onCounterChange={setCounter} />
      <h1>{counter}</h1>
    </div>
  );
}

function Counter({ onCounterChange }) {
  const [counter, setCounter] = useState(0);
  const handleChange = (counter) => {
    setCounter(counter);
    onCounterChange(counter);
  };
  const increment = () => handleChange(counter + 1);
  const decrement = () => handleChange(counter - 1);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

// 64. Use useEffect improperly
function Form() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(undefined);

  useEffect(() => {
    setError(validateForm(state));
  }, [state]);

  return (
    <div>
      {/* Rest of the component */}
    </div>
  );
}

// 65. Using a state variable before it's initialized
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser().then((data) => setUser(data));
  }, []);

  return (
    <div>
      {user.name}
    </div>
  );
}

// 66. Not destructuring props
function PostsList({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          user={post.user}
          title={post.title}
          tags_list={post.tags_list}
          reading_time={post.reading_time}
          comments_count={post.comments_count}
          published_at_int={post.published_at_int}
        />
      ))}
    </div>
  );
}

// 67. Increment counter twice
function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementOnce = () => {
    setCounter(counter + 1);
  };
  const incrementTwice = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
  };

  return (
    <>
      <div>
        <button onClick={incrementOnce}>+1</button>
        <button onClick={incrementTwice}>+2</button>
      </div>
      <h1>{counter}</h1>
    </>
  );
}

// 68. Using bad props names
function List({ item }) {
  return (
    <div>
      {item.map((i) => (
        <Item key={i.id} item={i} />
      ))}
    </div>
  );
}

// 67. Having constants inside the component
function CoursesSelector() {
  const OPTIONS = ["Maths", "Grammar", "History"];

  return (
    <select>
      {OPTIONS.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  );
}

// 68. Having nested if statements
const StatusMessage = ({ status, role }) => {
  let content;
  if (status === "active") {
    if (role === "admin") {
      content = <>Welcome, <Role role={role} /> Your account is active.</>;
    } else if (role === "user") {
      content = <>Welcome, <Role role={role} />! Your account is active.</>;
    } else {
      content= <>Your account is active, but your role is unknown.</>;
    }
  } else if (status === "inactive") {
    if (role === "admin") {
      content = <>Sorry, <Role role={role} />. Your account is inactive.</>;
    } else if (role === "user") {
      content= <>Sorry, <Role role={role} />. Your account is inactive.</>;
    } else {
      content= <>Your account is inactive, and your role is unknown.</>;
    }
  } else {
    content= <>Status unknown.</>;
  }
  return <p>{content}</p>;
};
