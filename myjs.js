// IMPORTS
import { addToDo, addRandomToDo } from './add.js';
import { currentTimeDate } from './time.js';
import { updateTask } from './updatetask.js';
import { deleteToDo } from './delete.js';


// GET ELEMENTS FROM HTML
const finished = document.getElementById('finished');
const unfinished = document.getElementById('unfinished');
const addToDoContainer = document.getElementById('addToDoContainer');


// VARIABLES
let objectLength = 1;
let data = [];

export { objectLength, data };

// ADD TO DO-SECTION
let newTodoContainer = document.createElement('li');

let newTodoTitle = document.createElement('textarea');
newTodoTitle.placeholder = 'Title';

let newTodoDescription = document.createElement('textarea');
newTodoDescription.placeholder = 'Description of task';

let newTodoButton = document.createElement('button');
newTodoButton.innerText = 'Add new ToDo';

newTodoButton.addEventListener('click', function () {
    addToDo(newTodoDescription, newTodoTitle);
});

let newRandomTodoButton = document.createElement('button');
newRandomTodoButton.innerText = 'Add Random ToDo';

newRandomTodoButton.addEventListener('click', function () {
    addRandomToDo();
});

newTodoButton.classList.add('newTodoButton');
newRandomTodoButton.classList.add('newRandomTodoButton');
newTodoContainer.append(newTodoTitle, newTodoDescription, newTodoButton, newRandomTodoButton);
addToDoContainer.append(newTodoContainer);


// FETCHING API
fetch('https://dummyjson.com/todos?limit=1')
    .then((res) => res.json())
    .then((toDoData) => {
        data = toDoData.todos;
        data.forEach((toDoList) => {
            showToDos(toDoList)
        })
    });


// FUNCTION FOR RENDERING TODOS
export function showToDos(toDoList) {

    let list = document.createElement('li');
    let statusContainer = document.createElement('div');

    let title = document.createElement('h2');
    title.innerText = 'To do'.toUpperCase() + ' #' + objectLength + ': ' + newTodoTitle.value;

    let description = document.createElement('p');
    description.innerText = toDoList.todo;

    let dateCreated = document.createElement('p');
    dateCreated.innerHTML = 'Created: ' + currentTimeDate();

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerText = 'Delete task';

    objectLength++;

    let done = document.createElement('p');

    let checkboxLabel = document.createElement('label');
    checkboxLabel.setAttribute('for', 'checkbox' + toDoList.id);

    let doneCheckbox = document.createElement('input');
    doneCheckbox.setAttribute('type', 'checkbox');
    doneCheckbox.setAttribute('id', 'checkbox' + toDoList.id);

    doneCheckbox.addEventListener('click', function () {
        updateTask(toDoList, doneCheckbox, done, list);
    })

    if (toDoList.completed === true) {
        doneCheckbox.checked = true;
        done.innerText = 'Completed: ' + currentTimeDate();
        finished.append(list);
    }

    else {
        unfinished.append(list);
    }

    deleteBtn.addEventListener('click', function () {
        deleteToDo(toDoList, list, data);
        objectLength--;
    })


    checkboxLabel.appendChild(document.createTextNode('Task done: '))
    checkboxLabel.appendChild(doneCheckbox);

    statusContainer.append(done, checkboxLabel);
    list.append(title, description, dateCreated, statusContainer, deleteBtn);

    console.log(toDoList);
}
