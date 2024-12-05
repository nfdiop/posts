// Tip: Use split with a delimiter
const text = "Frontend, development. is fun, and rewarding!";
// Split on spaces, commas, periods, or multiple of them
const words = text.split(/[ ,.!]+/);
console.log(words);
// => ['Frontend', 'development', 'is', 'fun', 'and', 'rewarding', '']
