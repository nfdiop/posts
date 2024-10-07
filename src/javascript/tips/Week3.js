// Use performance.now()
// Start the timer
const startTime = performance.now();

// Example of code to measure
for (let i = 0; i < 1000; i++) {
  // Simulate some operation
  Math.sqrt(i);
}

// End the timer
const endTime = performance.now();

console.log(
    `Execution time: ${endTime - startTime} milliseconds`
);

// Use the reviver function in JSON.parse() to transform the parsed object
const DATE_FORMAT_REGEX =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,}|)Z$/;
const reviver = (_, value) => {
  if (typeof value === "string" && DATE_FORMAT_REGEX.test(value)) {
    return new Date(value);
  }
  return value;
};
const jsonString = `{
  "name": "Fatou",
  "createdAt": "2024-09-30T12:00:00Z",
  "updatedAt": "2024-10-01T15:30:00Z"
}`;

const parsedObject = JSON.parse(jsonString, reviver);
console.log(parsedObject.createdAt instanceof Date); // true
console.log(parsedObject.updatedAt instanceof Date); // true
