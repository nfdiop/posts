// Mistake: creating a state which could be derived from props
function Grades({ grades }) {
  const [average, setAverage] = useState(0);

  useEffect(() => {
    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    setAverage(sum / grades.length);
  }, [grades]);

  return (
    <div>
      <h1>Grades</h1>
      <p>Average: {average}</p>
    </div>
  );
}

// Forgetting to catch errors in a fetch request
function Profile() {
  const [user, setUser] = useState();

  useEffect(() => {
    fetch("/api/user")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
