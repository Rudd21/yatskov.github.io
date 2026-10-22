let task_num = 0;

document.addEventListener('DOMContentLoaded', () => { 
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        const tasks = savedTasks.split(';');
        tasks.forEach(taskStr => {
            if (taskStr.trim()) {
                const taskParts = taskStr.split('|');
                const taskText = taskParts[0];
                const taskCompleted = taskParts[1] === 'true';
                const taskNum = parseInt(taskParts[2], 10); 
                const taskTime = taskParts[3];
                if (!isNaN(taskNum)) {
                    addTask(taskText, taskCompleted, false, taskNum, taskTime);
                    task_num = Math.max(task_num, taskNum); 
                }
            }
        });
    }
});

document.getElementById('input').addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
        addTask(e.target.value, false, true, ++task_num, new Date().toLocaleString());
        e.target.value = "";
    }
});

function addTask(taskText, isCompleted, saveToLocalStorage, taskNumber, taskTime) {
    const taskContainer = document.createElement("div");
    taskContainer.className = "task";
    if (isCompleted) {
        taskContainer.classList.add('completed');
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = isCompleted;
    checkbox.addEventListener("change", () => {
        taskContainer.classList.toggle('completed');
        saveTasksToLocalStorage();
    });

    const taskSpan = document.createElement("span");
    taskSpan.style.marginLeft = "5px"; 
    taskSpan.innerHTML = `<b>Task ${taskNumber}</b> - ${taskTime} | ${taskText}`;
    taskSpan.addEventListener("dblclick", () => {
        const input = document.createElement("input");
        input.type = "text";
        input.value = taskText;
        taskContainer.replaceChild(input, taskSpan);
        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter" && input.value.trim() !== "") {
                taskText = input.value;
                taskSpan.innerHTML = `<b>Task ${taskNumber}</b> - ${taskTime} | ${taskText}`;
                taskContainer.replaceChild(taskSpan, input);
                saveTasksToLocalStorage();
            }
        });
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", () => {
        const isConfirmed = confirm("Ви впевнені, що хочете видалити це завдання?");
        if (isConfirmed) {
            taskContainer.remove();
            saveTasksToLocalStorage();
        }
    });

    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(taskSpan);
    taskContainer.appendChild(deleteButton);
    document.getElementById('taskList').appendChild(taskContainer);

    if (saveToLocalStorage) {
        saveTasksToLocalStorage();
    }
}

function saveTasksToLocalStorage() {
    const tasks = [];
    document.querySelectorAll('.task').forEach(task => {
        const text = task.querySelector('span').textContent.split('|')[1].trim();
        const completed = task.classList.contains('completed');
        const num = parseInt(task.querySelector('span').textContent.split(' ')[1], 10);
        const time = task.querySelector('span').textContent.split('-')[1].trim().split('|')[0].trim();
        if (!isNaN(num)) {
            tasks.push(`${text}|${completed}|${num}|${time}`);
        }
    });
    localStorage.setItem('tasks', tasks.join(';'));
}

document.getElementById('all-tasks-button').addEventListener('click', (e) => {
    sortTasks('all');
});

document.getElementById('completed-tasks-button').addEventListener('click', (e) => {
    sortTasks('completed');
});

document.getElementById('uncompleted-tasks-button').addEventListener('click', (e) => {
    sortTasks('uncompleted');
});

function sortTasks(type) {
    const tasks = Array.from(document.querySelectorAll('.task'));
    tasks.forEach(task => {
        const isCompleted = task.classList.contains('completed');
        if (type === 'all') {
            task.style.display = 'flex';
        } else if (type === 'completed' && isCompleted) {
            task.style.display = 'flex';
        } else if (type === 'uncompleted' && !isCompleted) {
            task.style.display = 'flex';
        } else {
            task.style.display = 'none';
        }
    });
}
