function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
    if (taskInput.value === "") return;
    let li = document.createElement("li");
    li.textContent = taskInput.value;
    let btn = document.createElement("button");
    btn.textContent = "Remove";
    btn.onclick = function () { li.remove(); };
    li.appendChild(btn);
    taskList.appendChild(li);
    taskInput.value = "";
}