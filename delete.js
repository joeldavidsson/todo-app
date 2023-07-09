

export function deleteToDo(toDoList, list, data) {
    let index = data.findIndex((item) => item.id === toDoList.id);

    fetch('https://dummyjson.com/todos/' + toDoList.id, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(() => {
            if (toDoList.isDeleted === true) {
                list.remove();
            }
            if (index !== -1) {
                data.splice(index, 1);
                list.remove();
            }
        })
}



