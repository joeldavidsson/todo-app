import { showToDos, objectLength, data } from './myjs.js'

export function addToDo(newTodoDescription, newTodoTitle) {


    fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            todo: newTodoDescription.value,
            completed: false,
            userId: objectLength,
        })
    })
        .then(res => res.json())
        .then((newTodo) => {
            
            showToDos(newTodo, newTodoTitle);
            newTodoTitle.value = '';
            newTodoDescription.value = '';
            data.push(newTodo);
        });
};

export function addRandomToDo() {
    fetch('https://dummyjson.com/todos/random')
.then(res => res.json())
        .then((newRandomTodo) => {
            showToDos(newRandomTodo);
            data.push(newRandomTodo);
});
}
