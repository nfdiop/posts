// Mistake 73. not using curly brackets
import * as React from "react";

export function MyComponent() {
  return (
    <div style={width: "100%"}>
      Hello, X
    </div>);
}

// Mistake 74. not using the correct attribute name
import * as React from "react";

export function MyComponent() {
  return (
    <div class="container">
      Hello, X
    </div>);
}

// Mistake 75. having too many states (> 10)
import * as React from "react";

export function MyComponent() {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState(0);
  const [job, setJob] = React.useState("");
  const [city, setCity] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [zip, setZip] = React.useState("");
  const [state, setState] = React.useState("");
  const [isEditing, setIsEditing] = React.useState(false);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [isAdding, setIsAdding] = React.useState(false);
  const [isSaving, setIsSaving] = React.useState(false);
  const [isUpdating, setIsUpdating] = React.useState(false);

  return (
    // ...Rest of component
  );

}

// Mistake 76. Doing effect outside of useEffect
import * as React from "react";

export function Dashboard({ userId }) {
  const [posts, setPosts] = React.useState(null);

  fetchPosts(userId).then((data) => {
    setPosts({type: "success", data});
  }).catch((err) => {
    setPosts({type: "error", err});
  });

  return (
    <>
      {posts == null && <p>Loading...</p>}
      {posts.type === "error" && <Error err={posts.err} />}
      {posts.type === "success" && (
        <ul>
          {posts.data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

// Mistake 77. Directly manipulating the DOM
export const MyComponent = () => {
  const handleClick = () => {
    const c = document.getElementById("c");
    c.style.backgroundColor = "blue";
  }

  return (
    <div>
      <button onClick={handleClick}>
        Change Color
      </button>
      <p id="c">Hello, World!</p>
    </div>
  );
}

// Mistake 78. Memoising a value and falling back into an unstable constant
import * as React from "react";

function MyComponent({ posts }) {
  const [filters, setFilters] = useState();

  return (
    <div>
      <Filters
        filters={filters}
        onFiltersChange={setFilters}
      />
      <MemoizedDashboard
        posts={posts}
        filters={filters ?? {}}
      />
    </div>
  );
}

const MemoizedDashboard = memo(({ filters, posts }) => {
  //TODO
  return <div>...</div>;
});
