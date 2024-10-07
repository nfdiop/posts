function Dashboard({ posts }) {
  if (posts.length == null) {
    return <>No posts</>;
  }

  const [direction, setDirection] = useState("asc");

  return (
    <Posts
      posts={posts}
      sortDirection={direction}
      onDirectionChange={setDirection}
    />
  );
}


const Posts = ({ posts, sortDirection, onDirectionChange }) => {
  const toggleDirection = () => {
    onDirectionChange(direction === "asc" ? "desc" : "asc");
  };

  return (
    <div>
      <button onClick={toggleDirection}>
        {sortDirection === "asc" ? "Sort desc" : "Sort asc"}
      </button>
      {posts
        .sort((a, b) =>
          sortDirection === "asc"
            ? a.publicationDate - b.publicationDate
            : b.publicationDate - a.publicationDate
        )
        .map((post) => (
          <Post
            key={post.id}
            title={post.title}
            status={post.status}
            publicationDate={post.publicationDate}
          />
        ))}
    </div>
  );
};
