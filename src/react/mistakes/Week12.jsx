
// 62. Using context before it's initialized

import { createContext, useContext } from "react";

const AuthContext = createContext(null);

function App(){
  const user = useContext(AuthContext);

  return (
    <AuthContext.Provider value={user}>
      Welcome back {user.name}!
    </AuthContext.Provider>
  )
}

// 63. Impure component function
let counter = 0;

function Welcome() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    counter += 1;
    const message = `You're number ${counter}`;
    setGreeting(message);
  }, []);

  return <h1>{greeting}</h1>;
}

// 64. Forgetting to pass the value to the provider
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  // ... rest of logic to get the theme ...
  return (
    <ThemeContext.Provider>
      <Dashboard />
    </ThemeContext.Provider>
  );
}
