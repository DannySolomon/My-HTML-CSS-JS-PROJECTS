let tasks = [];
const taskList = document.getElementById("list");
const addTaskInput = document.getElementById("add");
const tasksCounter = document.getElementById("task-counter");


function fetchToDos(){
    fetch("https://jsonplaceholder.typicode.com/todos").then(function(res){
        return res.json();
    }).then(function(data){
        tasks = data.slice(0,10);
        console.log(data);
        renderList();
    }).catch(function(err){
        console.log("error : ",err);
    })
}

function addTaskToDOM(task){
    const li = document.createElement('li');

    li.innerHTML = `
        <input type="checkbox" class="checkbox-item" id="${task.id}" ${task.completed ? 'checked': ''}>
        <label for="${task.id}">${task.title}</label>
        <b class="delete-item" data-id="${task.id}">X</b>`;
    taskList.append(li);
}

function renderList(){
    taskList.innerHTML = '';

    for(let i of tasks)
    {
        addTaskToDOM(i);
    }

    tasksCounter.innerHTML = tasks.length;

}

function markTaskAsComplete(taskId){
    let index = tasks.findIndex(tasks => tasks.id==taskId);
    tasks[index].completed = !tasks[index].completed;
    // let labelele = document.querySelector(`[for="${taskId}"]`);
    // labelele.style.textDecoration = line-through;
    renderList();
}

function deleteTask(taskId){
    let newTasks = tasks.filter(tasks => tasks.id!=taskId);
    tasks=newTasks;
    renderList();
    showNotification("Task deleted Successfully");
}

function addTask(task){
    tasks.push(task);
    renderList();
    showNotification("Task added Successfully");
}

function showNotification(text){
    alert(text);
}

function handleKeyDownEvent(e){
    if(e.key == 'Enter')
    {
        const text = e.target.value;
        console.log("text:", text );
        if(!text)
        {
            showNotification("Task text cannot be empty");
            return;
        }

        const task = {
            title: text,
            id: Date.now().toString(),
            completed: false
        }

        e.target.value = '';
        addTask(task);
    }
}

function handleClickEvent(e){
    let target = e.target;
    if(target.className == 'delete-item')
    {
        deleteTask(target.dataset.id);
        return;
    }
    else if(target.className == 'checkbox-item')
    {
        markTaskAsComplete(target.id);
        return;
    }
}

function initializeApp(){
    fetchToDos();
    addTaskInput.addEventListener('keydown',handleKeyDownEvent);
    document.addEventListener('click', handleClickEvent);
}

initializeApp();

