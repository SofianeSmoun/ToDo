const form = document.querySelector(".task_add_form");
const input = document.querySelector(".task_desc_input");
const taskList = document.querySelector(".task_list");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const taskText = input.value.trim();
  const li = document.createElement("li");
  li.textContent = taskText;
  taskList.appendChild(li);
});
