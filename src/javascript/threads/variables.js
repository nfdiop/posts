// `me` is a variable
const me = {
  name: "Ndeye Fatou Diop",
  age: 30,
};
console.log(`${me.name}: ${me.age} years old.`);

let fullName; // Declaration
fullName = "Ndeye Fatou Diop" // Initialization
fullName = "Fatou" // Reassignment

// Option 1: Using `let`
let age;

// Option 2: Using `const`
// IMPORTANT: We cannot do only `const name;`
// we must initialize the variable
const age = 30;

// Option 3 (old way, not recommended): Using `var`
var age;

'use strict';

function sum(a, a, b) {
	return a + b;
}

// SyntaxError: Duplicate parameter name not allowed in this context
console.log("Sum: ", sum(1, 3, 2))

// ❌ Bad
let try; // try is a reserved word
let place_of_birth; // not camelCase or uppercase
const x = 100; // not descriptive

// ✅ Good
let shouldRetry;
let placeOfBirth;
const TIMEOUT_MS = 100;

// 1. Global scoped variables
let fullName = "Ndeye Fatou Diop";
var age;

// 2. Module scoped variables
// module.js
let fullName = "Ndeye Fatou Diop";
export const age = 30;

// 3. Function scoped variables
function sayHi(){
    // fullName is only available within the function
    let fullName = "Ndeye Fatou Diop";
    console.log(`Hi, ${fullName}.`);
}

// 4. Block scoped variables
if(myCondition) {
    // age is only available within the block
    let age = 10;
    console.log(`You are, ${age} years old.`);
}


// ❌ Bad: We are redeclaring `fullName` within the same scope
if(myCondition) {
    // We are inside a block scope
    let fullName = "Ndeye Fatou";
    // …
    let fullName; // SyntaxError: Identifier 'fullName' has already been declared
}


// ✅ This works
if(myCondition) {
    let fullName = "Ndeye Fatou";
    // …
}
let fullName; // Ok since `fullName` is declared outside of the block scope


// 1. Function hoisting
sayHello(); // This works, even though the function is declared later in the code

function sayHello() {
    console.log("Hello!");
}

// 2. Var hoisting
console.log(fullName); // This will log `undefined`
var fullName = "Ndeye Fatou"
console.log(fullName); // This will log `Ndeye Fatou`

// 3. Let and const hoisting
console.log(fullName); // This will throw an error `ReferenceError: Cannot access 'fullName' before initialization`
let fullName = "Ndeye Fatou"
console.log(fullName); // This will log `Ndeye Fatou`


