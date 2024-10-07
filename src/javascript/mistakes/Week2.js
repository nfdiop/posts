// Declaring the same variable again
function getDayName(day) {
  if(day === 0) {
    let dayName = "Sunday";
    return dayName;
  } else if(day === 1) {
    let dayName = "Monday";
    return dayName;
  }
  switch (day) {
    case 0:
      let dayName = "Sunday";
      return dayName;
    case 1:
      let dayName = "Monday";
      return dayName;
    // …
  }
}
