import './styles/main.scss';

import { addItem, deleteItem, getItems } from './modules/tasks.js';

import { completed, removeCompleteTask } from './modules/taskAction.js';

document.addEventListener('DOMContentLoaded', () => {

      let items = getItems();
    
      items.sort((a, b) => a.index - b.index);
  
      document.querySelector('.container').innerHTML = `
        <div class="title">
          <h1>Today's to Do</h1>
          <button type="button" class="reload"><i class="fa-solid fa-arrows-rotate"></i></button>
        </div>
        <form class="todo-form">
          <input type="text" name="text" id="text-add" placeholder="Add to your list...">
          <button type="submit" id="submit-btn"><i class="fa-solid fa-right-to-bracket"></i></button>
        </form>
        <ul class="list-container">
        </ul>
        <button type="button" id="delete-btn">Clear all completed</button>
      `;

    items.forEach((item) => addItem(item));
  
    document.querySelector('.todo-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const inputValue = document.querySelector('#text-add').value;
      const index = items.length + 1;
      if(inputValue === ''){
        return
      }

      const item = {
        complete: false,
        description: inputValue,
        index: index, 
      }

      addItem(item);
      items.push(item);
      localStorage.setItem('items',JSON.stringify(items));
      location.reload();
    });


     deleteItem();
     completed();
     removeCompleteTask();
});