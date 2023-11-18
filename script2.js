// Get the elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value;
    if (taskText.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <span class="delete">X</span>
    `;

    li.querySelector(".delete").addEventListener("click", () => {
        li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = "";
}

// Add task when the "Add" button is clicked
addTaskButton.addEventListener("click", addTask);

// Add task when the Enter key is pressed
taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
