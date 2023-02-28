import './styles/main.scss';

const savedItems = [
    {
        completed: false,
        description: 'Exercise',
        index: 3,
    },
    {
        completed: false,
        description: 'Study',
        index: 2,
    },
    {
        completed: false,
        description: 'Take a walk',
        index: 1,
    }
];

const displayItems = () => {
    let items = savedItems;
    
    // Sort the items by their index property
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

    items.forEach((item) => {
        const listItems = document.querySelector('.list-container');
    
        const listItem = document.createElement('li');
    
        listItem.innerHTML = `
            <li>
                <div>
                    <input type="checkbox" name="checkbox" id="checkbox">
                    <p>${item.description}</p>
                </div>
                <button type="button" class="list-btn"><i class="fa-solid fa-ellipsis-vertical"></i></button>
            </li>`;
        
        listItems.appendChild(listItem);
    })
};

document.addEventListener('DOMContentLoaded', displayItems);
