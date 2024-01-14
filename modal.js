document.addEventListener('DOMContentLoaded', function () {

    var openModalBtn = document.getElementById('openModal');

    var modal = document.getElementById('myModal');

    var isTaskCompleted = false;

    if (openModalBtn) {
        openModalBtn.onclick = function () {
            if (modal) {
                modal.style.display = 'block';
            }
        };
    }

    window.onclick = function (event) {
        if (modal && event.target === modal) {
            modal.style.display = 'none';
        }
    };

    var taskForm = document.getElementById('taskForm');

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

        var newTask = document.getElementById('newTask').value;
        var taskType = document.getElementById('taskType').value;

        // Corrige o nome da lista para corresponder ao HTML (listNigth -> listNight)
        var taskList = document.getElementById('list' + taskType.charAt(0).toUpperCase() + taskType.slice(1).toLowerCase());

        if (taskList) {
            var taskItem = document.createElement('div');
            taskItem.className = 'taskItem';

        taskItem.innerHTML = `
            <input type="radio" name="tasks" />
            <label class="taskLabel">${newTask}</label>
            <button class="deleteButton">-</button>
        `;

        taskList.appendChild(taskItem);
         var radioInput = taskItem.querySelector('input[type="radio"]');
         radioInput.addEventListener('change', function () {
             var taskLabel = taskItem.querySelector('.taskLabel');
             if (radioInput.checked) {
                 var isTaskCompleted = taskLabel.classList.contains('taskCompleted');
                 if (!isTaskCompleted) {
                     taskLabel.classList.add('taskCompleted');
                 } else {
                     taskLabel.classList.remove('taskCompleted');
                 }
             }
         });

        var deleteButton = taskItem.querySelector('.deleteButton');
        deleteButton.addEventListener('click', function () {
            taskList.removeChild(taskItem);
        });

        modal.style.display = 'none';

        taskForm.reset();
    } else {
        console.error('Lista não encontrada:', 'list' + taskType.charAt(0).toUpperCase() + taskType.slice(1));
    }
    });
});
