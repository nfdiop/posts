function getTodosReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: crypto.randomUUID(),
            title: action.title,
            completed: false,
          },
        ],
      };
    default:
      return state;
  }
}

const name = "Ndeye Fatou Diop";
console.log(typeof "Hello"); // "string"
console.log(typeof "Hi"); // "string"
console.log(typeof name); // "string"

const sayHi = (name) => console.log(`Hi, ${name}`);
console.log(typeof sayHi); // "function"

const nums = [1, 2, 3];
console.log(Array.isArray(nums)); // true
console.log(Array.isArray({})); // false

const me = {
  name: "Fatou",
  age: 30,
  job: "Software Engineer",
};

const me = {
  name: "Ndeye Fatou Diop",
  sayHi() {
    console.log(`Hi, my name is ${this.name}`);
  },
  sayHelloWorld() {
    console.log("Hello World");
  },
};

me.sayHi(); // Hi, my name is Ndeye Fatou Diop
const sayHelloFn = me.sayHelloWorld;
sayHelloFn();

// returns 4 since "9" is coerced into the number `9`
const result = "9" - 5;
// returns 1 since true is coerced into 1 and false into 0
const sum = true + false;

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(!!1); // true
console.log(!!0); // false

const me = {
  name: "Ndeye Fatou Diop",
  job: "Software Engineer",
  "way of life": "Coding",
};

console.log(me.name); // "Ndeye Fatou Diop"
console.log(me["name"]); // "Ndeye Fatou Diop"

const arr = [1, 2, 3];

// Option 1: Use for...of
for (let x of arr) {
  console.log(x);
}

// Option 2: Use for with indices
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Option 3: Use forEach
arr.forEach((x) => {
  console.log(x);
});

const obj = {
  name: "Fatou",
  age: 30,
};

// Option 1: Use `Object.keys`
Object.keys(obj).forEach((k) => {
  console.log(obj[k]);
});

// Option 2: Use `Object.values`
Object.values(obj).forEach((x) => {
  console.log(x);
});

// Option 3: Use `Object.entries`
Object.entries(obj).forEach(([k, x]) => {
  console.log(x);
});

const car = {
  wheels: 4,
};
const bmw = {
  brand: "BMW",
  print() {
    console.log(`
        ${this.brand}: ${this.wheels} wheels`);
  },
};

// Sets bmw.[[Prototype]] to car
bmw.__proto__ = car;
bmw.print(); //"My brand is BMW and I have 4 wheels"

// #1: Explicitly set the value to undefined
let age = undefined;

// #2: Declare a variable without an initial value
let age;
var name;

// #3: Access a property/method that doesn't exist
const me = {
  name: "Ndeye Fatou Diop",
};
let age = me.age; // `age` is undefined


const arr1 = [ { name: "Fatou"}]

// arr2 is a shallow copy of arr1
const arr2 = [...arr1]

// arr3 is a deep copy of arr1
const arr3 = structuredClone(arr1)

let x = "Ndeye Fatou Diop"
console.log(typeof x); // logs "string"

x = 45;
console.log(typeof x); // logs "number"

console.log(1 == "1"); // true
console.log(1 === "1"); // false

// Option #1:
const val = obj != null ? obj.value : undefined

// Option #2 (better): optional chaining operator
const val = obj?.value
