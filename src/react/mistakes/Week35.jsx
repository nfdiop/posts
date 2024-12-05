export function Dashboard({ userId }) {
  const [userPosts, setUserPosts] = useState({
    type: "notStartedLoading",
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUserPosts({ type: "success", data });
      })
      .catch((error) => {
        setUserPosts({ type: "error", error });
      });
  }, [userId]);

  // Rest of logic…
}

// Mistake: Declaring lazy component inside other components
export function MyComponent() {
  const LazyComponent = lazy(() => import("./LazyComponent"));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

// Mistake: forgetting to use Suspense with lazy components
const LazyComponent = lazy(
    () => import("./LazyComponent")
);

export function Dashboard() {
  return (
    <>
      <Sidebar />
      <LazyComponent />
    </>
  );
}
