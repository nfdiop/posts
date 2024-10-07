// 1. Use Live Server VS Code Extension to watch files and update the browser in real-time.

// 2. Use block-scoping to re-use the same variable name in different switch blocks
// ❌ Bad: The second case will cause an issue because `dayName` is already declared
function getDayName(day) {
  let dayName;
  switch (day) {
    case 0:
      let dayName = "Sunday";
      break;
    case 1:
      let dayName = "Monday";
      break;
    // …
  }
  return dayName;
}

// ✅ Good: We use block scoping to re-use the same variable name
function getDayName(day) {
  let dayName;
  switch (day) {
    case 0: {
      let dayName = "Sunday";
      break;
    }
    case 1: {
      let dayName = "Monday";
      break;
    }
    // …
  }
  //..
}

function calculateTax(order: Order): number {
  let taxRate;
  switch (order.type) {
    case "book": {
      taxRate = 0.05;
      break;
    }
    case "electronics": {
      taxRate = 0.15;
      break;
    }
    case "clothing": {
      taxRate = 0.1;
      break;
    }
  }
  return taxRate * order.price;
}
