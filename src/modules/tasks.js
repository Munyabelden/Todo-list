    const getItems = () => {
        let items;

        if(localStorage.getItem('items') === null){
            items = [];
        }else{
            items = JSON.parse(localStorage.getItem('items'))
        }

        return items;
    }

    
  
    const addItem = (item) => {
      const listItems = document.querySelector('.list-container');
  
      const listItem = document.createElement('li');

      listItem.setAttribute('id', `${item.index}`);
      listItem.setAttribute('data-complete', 'false')
  
      listItem.innerHTML = `
          <div>
            <input type="checkbox" name="checkbox" id="checkbox">
            <input type="text" class="edit-input" id="${item.index}" name="task" value="${item.description}">
          </div>
          <button type="button" class="list-btn" ><i class="fa-solid fa-ellipsis-vertical"></i></button>
          <button type="button" class="remove-btn" id="${item.index}"><i class="fa-solid fa-trash-can"></i></button> 
        `;
  
        listItems.insertAdjacentElement('beforeend', listItem);
  
        const editInput = document.querySelectorAll('.edit-input');
        let items = getItems();
        editInput.forEach((input) => {
          input.addEventListener('input', ()=>{
            const editId = parseInt(input.id, 10);
            let item = JSON.parse(localStorage.getItem('items'));
            items = item;
            items[editId].description = document.getElementById(editId).value;
            item = items;
            localStorage.setItem('items', JSON.stringify(items));
          })
        })
         const completedTask = listItem.getAttribute('complete');
         if(completedTask === true) {
           listItem.classList.add('changed')
         }
  
    };

const deleteItem = () => {
       let items = getItems();
        document.querySelectorAll('.list-btn').forEach((button) => {
      button.addEventListener('click', () => {
        const listItem = button.closest('li');
        listItem.style.background = 'bisque';
        button.style.display = 'none';
        const removeButton = listItem.querySelector('.remove-btn');
        removeButton.style.display = 'block';
        removeButton.addEventListener('click', () => {
            listItem.remove();
            listItem.style.border = 'none';  
            const index = parseInt(removeButton.id);
            items = items.filter((item) => item.index !== index);
            items.forEach((item, i) => {
              item.index = i + 1;
            });
            localStorage.setItem('items', JSON.stringify(items));
            window.location.reload();
        })
      });
    });
}

export { addItem, deleteItem, getItems }
