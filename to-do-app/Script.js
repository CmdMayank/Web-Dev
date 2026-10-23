
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const newTask = taskInput.value.trim();

  // Prevent empty tasks
  if (newTask === "") {
    taskInput.focus();
    return;
  }

  const LI = document.createElement("li");
  LI.classList.add("p-3", "list-group-item");

  const SPAN = document.createElement("span");
  SPAN.textContent = newTask;

  const BUTTON = document.createElement("button");
  BUTTON.classList.add("btn", "btn-danger", "btn-sm", "ms-3");
  BUTTON.textContent = "Delete";
  BUTTON.onclick = () => LI.remove();

  LI.appendChild(SPAN);
  LI.appendChild(BUTTON);

  document.getElementById("taskList").appendChild(LI);

  taskInput.value = "";
  taskInput.focus();
}

// Add task when Enter is pressed
document.getElementById("taskInput").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
