function Parent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Parent</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/* Every time count changes, this will render */}
      <UserProvider>
        <Dashboard />
      </UserProvider>
    </div>
  );
}

function UserProvider({ children }) {
    const user = { name: "Fatou", age: 30 };

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}

function Dashboard() {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

const UserContext = createContext();
