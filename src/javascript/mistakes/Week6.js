function updateComments(userInput) {
  const comments = document.getElementById("comments");
  if (comments != null) {
    comments.innerHTML = userInput;
  }
}

// Example
updateComments(
    "<img src='x' onerror='alert(`Hacked!`)'>Nice article!"
);


// Updating a DOM element without checking existence
document.getElementById("myElement").style.display = "none";


// Updating the DOM inside a loop
const items = ["Item 1", "Item 2", "Item 3"];
items.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  document.getElementById("list").appendChild(li);
});
