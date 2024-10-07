// 1. You can swap variables
const a = 1;
const b = 2;
const [b, a] = [a, b];
console.log(a); // 2
console.log(b); // 1

// 2. You can use the nullish coalescing assignment ??= to assign a value to a variable only if it is null or undefined
function groupByKey(items, key) {
  return items.reduce((previous, current) => {
    const keyValue = current[key];
    // Set the default value to an empty array
    // before pushing the current item
    (previous[keyValue] ??= []).push(current);
    return previous;
  }, {});
}

groupByKey(
  [
    { category: "fruit", name: "apple" },
    { category: "vegetable", name: "carrot" },
    { category: "fruit", name: "orange" },
  ],
  "category"
);

function wait(timeOutMs) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeOutMs);
  });
}

function testSomething() {
  // ...
  wait(1_000);
  // ...
}
