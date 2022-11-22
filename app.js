console.log("hello!");

// Select the form
const form = document.querySelector("#todo-form");
// Listen for "submit"
form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  // Select the text in the input
  const input = document.querySelector("#todo-input");
  // Select the todo list
  const list = document.querySelector("#todo-list");
  // Create a new list item with the input text
  const newLi = document.createElement("li");
  newLi.innerText = input.value;
  // Add the new list item to our list
  list.append(newLi);
  // Clear text input
  input.value = "";
});
