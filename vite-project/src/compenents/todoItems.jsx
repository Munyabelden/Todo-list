import { useState } from "react";

const TodoItems = () => {
  const [todoItems, setTodosItems] = useState([
    {
        id: 1,
        text: 'Learn React',
        completed: false
    },
    {
        id: 2,
        text: 'Learn Redux',
        completed: false
    },
    {
        id: 3,
        text: 'Learn Node',
        completed: false
    },
    {
        id: 4,
        text: 'Learn Express',
        completed: false
    }
  ]);

  const handleChange = (id) => {
    setTodosItems((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodosItems([
      ...todoItems.filter((todo) =>{
          return todo.id!== id;
      })
    ]);
  };
  
  const todoList = () => {
    return todoItems.map(todoItem => (
      <li key={todoItem.id}>
        <input type="checkbox" checked={todoItem.completed} onChange={() => handleChange(todoItem.id)} />
        {todoItem.text}
        <button onClick={ () => deleteTodo(todoItem.id) }>Del</button>
      </li>
    ));
  }
  
  return (
    <ul>
      { todoList() }
    </ul>
  )
}
  
export default TodoItems;
  