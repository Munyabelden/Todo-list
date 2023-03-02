
const completed = () => {
  document.querySelectorAll('#checkbox').forEach((checked) => {
    checked.addEventListener('change', (e) => {
      const task = e.target.closest('li');
      let items = JSON.parse(localStorage.getItem('items')) || [];
      const item = items.find(item => item.index == task.id);
      if (item) {
        item.complete = !item.complete;
        localStorage.setItem('items', JSON.stringify(items));

        if(item.complete){
          task.classList.add('changed');
        }else {
          task.classList.remove('changed');
        };
      };       
    });
  });
};

const removeCompleteTask = () => {
 document.querySelector('#delete-btn').addEventListener('click', () => {
  let items = JSON.parse(localStorage.getItem('items')) || [];
  items = items.filter((item) => !item.complete)
  items.forEach((item, i) => {
    item.index = i + 1;
  });
  localStorage.setItem('items', JSON.stringify(items));
  window.location.reload();
 })
};

export { completed, removeCompleteTask }