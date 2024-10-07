function App() {
  const handleClick = () => {
    alert("Hello you clicked me!");
  }
  return (
    <>
      <h1>Hello</h1>
      <button onclick={handleClick}>
        Click me
      </button>
    </>
  );
}

function App() {
  const handleClick = () => {
    alert("Hello you clicked me!");
  }
  return (
    <>
      <h1>Hello</h1>
      <button onClick="handleClick()">
        Click me
      </button>
    </>
  );
}

function Form({ onSubmit }) {
  const [name, setName] = useState("");
  const handleSubmit = () => {
    onSubmit({ name });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

function Checkbox({ checked } ) {
  return (
    <input
      type="checkbox"
      checked={checked}
    />
  );
}


function Checkbox() {
  const [checked, setChecked] = useState(false);
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => setChecked(e.target.value)}
    />
  );
}

function TextInput({ defaultValue }) {
  return (
    <input
      type="text"
      value={defaultValue}
      // defaultValue={defaultValue}
      // readOnly={true}
    />
  );
}

const MAX_USERNAME_LENGTH = 4;

export function TextInput() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue.slice(0, MAX_USERNAME_LENGTH));
  };
  return (
    <label>
      Username:{" "}
      <input
        type="text"
        value={value}
        onChange={handleChange}
      />
    </label>
  );
}

import { useIsMobile } from 'useIsMobile';
import { useFetchPosts } from 'useFetchPosts';
import { Dashboard } from './Dashboard';
import { Sidebar } from './Sidebar';

export function App() {
  const isMobile = useIsMobile();
  const posts = useFetchPosts();
  const style = { width: isMobile ? "100%" : "50%" };
  return <Home posts={posts} style={style} />;
}

const Home = memo(function _Home({ style, posts }) {
  return (
    <div style={style}>
      <Sidebar />
      <Dashboard posts={posts} />
    </div>
  );
});
