let tasks = [];

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const errorMsg = document.getElementById("errorMsg");
const counter = document.getElementById("counter");

function updateCounter() {
    const doneCount = tasks.filter(task => task.done).length;
    counter.textContent = "Klara uppgifter: " + doneCount;
}

function addTask() {
    const text = taskInput.value.trim();

    if (text === "") {
        errorMsg.classList.remove("hidden");
        return;
    }

    errorMsg.classList.add("hidden");

    const newTask = { text: text, done: false };
    tasks.push(newTask);

    const li = document.createElement("li");
    li.textContent = text;

    li.addEventListener("click", function() {
        li.classList.toggle("done");
        newTask.done = li.classList.contains("done");
        updateCounter();
    });

    taskList.appendChild(li);
    taskInput.value = "";
}

addBtn.addEventListener("click", addTask);