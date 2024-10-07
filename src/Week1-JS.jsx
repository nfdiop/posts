// 1. Mistake: useless JS comment

/**
 * Function that says hi
 */
function sayHi(name) {
  // Logs hi and the name
  console.log(`Hi, ${name}`);
}

// 2. Omit unit
const TIMEOUT = 1000;

// 3. Bad variable name
const n = "Ndeye Fatou Diop";
const x = 10;

console.log(`${n}: ${x} years old`);

// 4. Function with more than 4 arguments and they are all the same type
function configureSystem(
  enableLogging,
  isDebugMode,
  useCache,
  allowRemoteAccess
) {
  // Implementation
}

configureSystem(true, false, true, true);

// 5. Nested if statements
function processOrder(params) {
  if (params.isMember) {
    if (params.hasDiscount) {
      if (params.isInStock) {
        if (params.isExpressShipping) {
          // Implementation
        } else {
          // Implementation
        }
      } else {
        // Implementation
      }
    } else {
      // Implementation
    }
  } else {
    // Implementation
  }
}

// 6.  Negative conditional
function processPayment(isPaymentNotComplete) {
  if (isPaymentNotComplete) {
    console.log("Payment has not been completed");
    return;
  }
  console.log("Payment is complete.");
}

// 7. Switch statement without break
function getDayName(dayNumber) {
  let dayName;
  switch (dayNumber) {
    case 1:
      dayName = "Monday";
    case 2:
      dayName = "Tuesday";
    case 3:
      dayName = "Wednesday";
    case 4:
      dayName = "Thursday";
    case 5:
      dayName = "Friday";
    case 6:
      dayName = "Saturday";
    case 7:
      dayName = "Sunday";
    default:
      dayName = "Invalid day number";
  }
  return dayName;
}

console.log(getDayName(3));
