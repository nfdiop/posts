// 30 common mistakes in JavaScript in 2024
// 8. Using incorrect comparison operator
let a = 0;
let b = false;

if (a == b) {
  console.log("This will be printed!");
} else {
  console.log("This won't be printed.");
}

// 9. Using var
var x = 5;

// 10. Forgetting to use await
const API_URL = "https://api.example.com";

async function fetchData() {
  const response = fetch(API_URL);
  return response.json();
}

// 11. Forgetting to return
const arr = [1, 2, 3];
const doubled = arr.map((x) => {
  x * 2;
});

// 12. Removing elements from an array while iterating
const fruits = [
  'apple',
  'apricot',
  'banana',
  'cherry'
];

// Remove fruits that start with 'a'
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i].startsWith('a')) {
    fruits.splice(i, 1);
  }
}


// 13. Incorrectly using arrow functions with this
// Explanation: Arrow functions do not have their own this context. Instead, they inherit this from the enclosing lexical scope at the time they are defined.
const me = {
  name: "Ndeye Fatou Diop",
  greet: () => {
    console.log(`Hello, ${this.name}`);
  }
};

// 14. Forgetting to check if the response is ok
const API_URL = "https://api.example.com";

async function fetchData() {
  const response = await fetch(API_URL);
  return response.json();
}

// 15. Re-assiging a const variable
const age = 5;
age = 10;

// 16. Misplacing return in a function
const sum = (a, b) => { a + b };

// 17. Forgetting async keyword
const POSTS_API_URL = "https://api.example.com/posts";

function fetchPosts() {
  const posts = await fetchData(
    "https://api.example.com/posts"
  );
  return posts
}

// 18. Not handling errors in async functions
// Hint: The endpoint can throw an error
async function fetchPosts(minimumLikes=0) {
  const response = await fetch(
    "https://api.example.com/posts"
  );
  const posts = response.json();
  return posts.filter(
    (post) => post.likes > minimumLikes
  );
}

// 19. Setting event listeners multiple times
const button = document.querySelector('button');
for (var i = 0; i < 5; i++) {
  button.addEventListener(
    'click',
    () => console.log(i)
  );
}

// 20. Infinite loops
function recurse() {
  recurse();
}
