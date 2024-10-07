const QUOTES_API = "https://api.quotable.io/quotes";

export function App() {
  const [quotes, setQuotes] = useState(undefined);
  useEffect(async () => {
    try {
      const response = await fetch(QUOTES_API);
      const data = await response.json();
      setQuotes(data.results);
    } catch {
      setQuotes([]);
    }
  }, []);

  if (quotes == null) {
    return "Loading…";
  }

  return (
    <>
      {quotes.map((q) => (
        <div key={q._id}>
          &quot;{q.content}&quot; by {q.author}
        </div>
      ))}
    </>
  );
}

export function SettingsPage() {
  return (
    <Page>
      <Profile />
      <Customization />
    </Page>
  );
}

const Page = memo(function _Page({ children }) {
  return (
    <>
      <NavigationMenu />
      {children}
    </>
  );
});


export function App() {
  const ref = useRef();
  const isHovered = useIsHovered(ref.current);

  return (
    <div ref={ref}>
      Hovered: {`${isHovered}`}
    </div>
  );
}

function useIsHovered(el) {
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    if (el == null) {
      return;
    }
    const onEnter = () => setIsHovered(true);
    const onLeave = () => setIsHovered(false);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [el]);
  return isHovered;
}

function Form({ formState, onSubmit }) {
  const [state, setFormState] = useState(formState);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(state);
      }}
    >
      <input
        type="text"
        value={state.name}
        onChange={(event) => {
          setFormState({
            ...state,
            name: event.target.value,
          });
        }}
      />
      <input
        type="email"
        value={state.email}
        onChange={(event) => {
          setFormState({
            ...state,
            email: event.target.value,
          });
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
