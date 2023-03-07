import { addItem, deleteItem } from './tasks.js';

// Mock the localStorage
const localStorage = (() => {
  let store = {};
  return {
    getItem: (key) => store[key],
    setItem: (key, value) => store[key] = value.toString(),
    clear: () => store = {}
  };
})();

// Mock the DOM
const listContainer = document.createElement('div');
listContainer.classList.add('list-container');
document.body.appendChild(listContainer);

describe('addItem', () => {

  beforeEach(() => {
    localStorage.clear();
    listContainer.innerHTML = '';
  });

  test('should add one item to the list', () => {
    // Call the function
    addItem({ index: 1, description: 'Buy milk' });

    // Check the DOM
    expect(listContainer.children.length).toBe(1);
    expect(listContainer.children[0].tagName).toBe('LI');

    // // Check the localStorage
    // expect(JSON.parse(localStorage.getItem('items'))).toEqual([{ index: 1, description: 'Buy milk' }]);
  });

});

describe('deleteItem', () => {

  beforeEach(() => {
    localStorage.clear();
    listContainer.innerHTML = '';

    // Add an item to the list
    addItem({ index: 1, description: 'Buy milk' });

    // Mark the item as deleted
    const listButton = listContainer.querySelector('.list-btn');
    listButton.dispatchEvent(new Event('click'));
  });

  test('should remove one  item from the list when the remove button is clicked', () => {
    // Call the function
    const removeButton = listContainer.querySelector('.remove-btn');
    removeButton.dispatchEvent(new Event('click'));

    // Check the DOM
    expect(listContainer.children.length).toBe(1);
  });
});
