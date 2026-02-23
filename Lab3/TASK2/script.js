const taskList = document.getElementById("taskList");
const items = taskList.querySelectorAll("li");
const form = document.getElementById('todoForm');
const input = document.getElementById('taskInput');


items.forEach(function (item) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", function () {
        item.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";

    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(item);
    });

    item.prepend(checkbox);
    item.appendChild(deleteBtn);
});

function addTask(text) {
    if (!text.trim()) return;

    const li = document.createElement("li"); 

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        li.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });

    const span = document.createElement("span"); 
    span.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask(input.value);
    input.value = '';
});