// Use json.parse

import { useState } from "react";

// Use JSON.stringify(obj, null, 2) to pretty-print JSON. The 2 adds spaces for better readability
const data = {
  name: "Ndeye Fatou Diop",
  skills: ["JS", "CSS", "React"],
};
console.log(JSON.stringify(data, null, 2));

/**
 * Returns:
 * {
  "name": "Ndeye Fatou Diop",
  "skills": [
    "JS",
    "CSS",
    "React"
  ]
}
 */

// Use Array.flatMap() to map and flatten an array in one go. Great for nested data:
const nestedArr = [[1], [2, 3], [4]];
const result = nestedArr.flatMap((x) => x.map((n) => n * 2)); // Output: [2, 4, 6, 8]

// Use URLSearchParams to manage query parameters easily:
const params = new URLSearchParams("name=Fatou&age=30");
params.append("country", "France");
console.log(params.get("country")); // France

// If you want to limit how often a function runs, use requestAnimationFrame for animations or when you need a smoother throttle:
// TODO: improve this example
let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      // Perform action here
      ticking = false;
    });
    ticking = true;
  }
});

// Use Intl.NumberFormat for localized currency and percentage formatting. Great for apps with international audiences:
const price = 1234.56;
const formattedPrice = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}).format(price);
console.log(formattedPrice); // "$1,234.56"

// Use the AbortController to cancel fetch requests for more control over async operations:
const controller = new AbortController();
fetch("https://jsonplaceholder.typicode.com/posts", {
  signal: controller.signal,
})
  .then((response) => response.json())
  .catch((err) => console.log("Fetch aborted:", err));
// Cancels the request if necessary
controller.abort("TODO: Reason for aborting");

// Use Intl.ListFormat to format lists with natural language styling:
const friends = ["Alice", "Bob", "Charlie"];
const formatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});
console.log(formatter.format(friends)); // "Alice, Bob, and Charlie"

// Take advantage of named capture groups in regex for more readable regex matches:
const regex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const match = "2024-10-27".match(regex);
console.log(match.groups.year); // "2024"
console.log(match.groups.month); // "10"

// Use BigInt for precise calculations with very large numbers—no more issues with integer overflow:
const largeNumber = BigInt("123456789012345678901234567890");
console.log(largeNumber + 1n); // 123456789012345678901234567891n

// Use Promise.allSettled() to handle multiple async operations without failing on rejection. This is ideal for gathering results from several sources, regardless of success/failure:
const promises = [
  Promise.resolve(1),
  Promise.reject("error"),
  Promise.resolve(3),
];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => {
    switch (result.status) {
      case "fulfilled":
        console.log("Success", result.value);
      case "rejected":
        console.log("Failure", result.reason);
    }
  })
);

// Use `async` vs returning Promise.resolve() for cleaner async functions:
// ❌ Bad: more verbose
function fetchData() {
  if (condition) {
    return Promise.resolve("Data");
  }
  // ... more logic
}

// ✅ Good: cleaner syntax
async function fetchData() {
  if (condition) {
    return "Data";
  }
  // ... more logic
}

// Use ResizeObserver to detect changes in the size of an element. This is useful for responsive designs or when you need to adjust layouts based on dynamic content:
// TODO: test an example with React
const observer = new ResizeObserver((entries) => {
  for (const entry of entries) {
    console.log(
      "Width:",
      entry.contentRect.width,
      "Height:",
      entry.contentRect.height
    );
  }
});
observer.observe(document.body);

// When dealing with promises, Promise.any() returns the first successful promise and ignores rejections (useful when you only need one success out of many):
const apiUrls = [
  "https://api1.example.com/data",
  "https://api2.example.com/data",
  "https://api3.example.com/data",
];

Promise.any(
  apiUrls.map((url) => fetch(url).then((response) => response.json()))
)
  .then((data) => console.log("Data received:", data))
  .catch((error) => console.error("All requests failed:", error));

// Use queueMicrotask() to schedule a microtask that executes immediately after the current synchronous code but before any setTimeout or setInterval callbacks:
// TODO: find a good example + explanation
// console.log("Start");
// queueMicrotask(() => console.log("Microtask"));
// console.log("End");
// Output: Start, End, Microtask

// Use Intl.RelativeTimeFormat with negative values for relative time messaging (e.g., “10 minutes ago”). This is great for timestamps in chat apps or notification UIs:
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
console.log(rtf.format(-10, "minute")); // "10 minutes ago"
console.log(rtf.format(3, "day")); // "in 3 days"

// Use URLPattern (supported in some environments) to parse and match URLs dynamically:
const pattern = new URLPattern({ pathname: "/p/:id" });
const match = pattern.exec("https://frontendjoy.com/p/welcome");
console.log(match.pathname.groups.id); // "welcome"

// Utilize Intl.NumberFormat to handle compact number formatting for large numbers, like abbreviating to thousands (K), millions (M), etc.:
const formatter = new Intl.NumberFormat("en", { notation: "compact" });
console.log(formatter.format(1234)); // "1.2K"
console.log(formatter.format(5678900)); // "5.7M"

// Use 𝚂𝚝𝚛𝚒𝚗𝚐.𝚛𝚊𝚠 to output raw strings with escape characters intact.
const path = String.raw`C:\Users\nfdiop\Documents`;
console.log(path); // C:\Users\nfdiop\Documents

function Form() {
  const [state, setState] = useState({
    name: "Ndeye Fatou Diop",
    email: "joyancefa@gmail.com",
    password: "",
  });

  const [error, setError] = useState(undefined);

  useEffect(() => {
    setError(validateForm(state));
  }, [state]);

  return <div>{/* Rest of component */}</div>;
}
