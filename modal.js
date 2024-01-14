// Função para abrir o modal
function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

// Função para fechar o modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Função para adicionar uma nova tarefa
function addTask(listType) {
    var taskList = document.getElementById("list" + listType);
    var newTaskInput = document.getElementById("newTask");
    var newTaskText = newTaskInput.value.trim();

    if (newTaskText !== "") {
        var li = document.createElement("li");
        var div = document.createElement("div");
        var checkbox = document.createElement("input");
        var label = document.createElement("label");
        var deleteButton = document.createElement("button");

        var taskId = "task" + listType + (taskList.children.length + 1);

        checkbox.type = "radio";
        checkbox.name = "tasks";
        checkbox.id = "check" + taskId;

        label.htmlFor = "check" + taskId;
        label.className = "taskLabel";
        label.id = "name" + taskId;
        label.textContent = newTaskText;

        deleteButton.className = "deleteButton";
        deleteButton.id = "delete" + taskId;
        deleteButton.textContent = "-";
        deleteButton.addEventListener("click", function () {
            deleteTask(this);
        });

        div.className = "taskItem";
        div.appendChild(checkbox);
        div.appendChild(label);
        div.appendChild(deleteButton);

        li.appendChild(div);
        taskList.appendChild(li);

        checkbox.addEventListener("change", function () {
            toggleTaskStyle(this, label);
        });

        newTaskInput.value = "";
    }
}

// Função para excluir uma tarefa
function deleteTask(button) {
    var taskItem = button.parentNode.parentNode;
    taskItem.parentNode.removeChild(taskItem);
}

// Função para alterar o estilo de uma tarefa ao ser marcada ou desmarcada
function toggleTaskStyle(checkbox, label) {
    if (checkbox.checked) {
        label.style.textDecoration = "line-through";
        label.style.opacity = "0.5";
    } else {
        label.style.textDecoration = "none";
        label.style.opacity = "1";
    }
}

document.getElementById("openModal").addEventListener("click", openModal);

document.getElementById("addTask").addEventListener("click", function () {
    var selectedList = document.querySelector('input[name="listType"]:checked');
    if (selectedList) {
        addTask(selectedList.value);
        closeModal(); 
    }
});
