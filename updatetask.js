import { currentTimeDate } from "./time.js";

export function updateTask(toDoList, doneCheckbox, done, list) {
  
  let id = toDoList.id;

  fetch('https://dummyjson.com/todos/' + id, {
    method: 'PUT', /* or PATCH */
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      completed: doneCheckbox.checked,
    })
  })
  .then(res => res.json())
    .then(() => {
    
      toDoList.completed = doneCheckbox.checked;
      
      if (id > 150) {
        console.log("API can't handle the request. Using local function instead. ")
      }

      if (toDoList.completed === true) {
        console.log(toDoList);
        done.innerText = "Completed: " + currentTimeDate();
        finished.append(list);
      } else {
        done.innerText = "";
        console.log(toDoList);
        unfinished.append(list);
      }
  });    
}
