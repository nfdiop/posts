// Declaring the same variable again
const fullName;
fullName = "Ndeye Fatou Diop"

// Wrong: duplicate parameter names not allowed in this context
'use strict';

function sum(a, a, b) {
	return a + b;
}

console.log("Sum: ", sum(1, 3, 2));

// Using a reserved keyword as a variable name
let try = 3;

// Wrong: re-declaration of let variable
if(myCondition) {
  let fullName = "Ndeye Fatou";
  // …
  let fullName = "Fatou Diop";
}

// Accessing variable before declaration
console.log(age);
let age = 30;

// Accessing function before hoisting
sayHi();
const sayHi = () => {
  console.log("Hi");
};

// Incorrectly checking if object
function isObject(value: unknown) {
  return typeof value === 'object';
}
