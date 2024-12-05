// Loss of precision in floating point numbers
const result = 0.1 + 0.2;
console.log(result === 0.3);

// Strings are immutable in JavaScript
let str = "hello";
str[0] = "H";
console.log(str);

// No initial value and using reduce
const getMin = (a, b) => Math.min(a, b);
const nums = [];
nums.reduce(getMin);

// Forgetting the return
fetch("https://api.example.com/data")
  .then((response) => {
    response.json();
  })
  .then((data) => {
    console.log(data);
  });

// Using Math.max() with an array
const numbers = [10, 5, 20];
console.log(Math.max(numbers));

// Using for...in with arrays
// Somewhere deep in the code,
// a developer added a new method
// to the Array prototype.
Array.prototype.bar = 1;

const a = [1, 2, 3, 4, 5];
for (let x in a) {
  console.log(x);
}

// parseInt() can be tricky
console.log(parseInt("10px"));
