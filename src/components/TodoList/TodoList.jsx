import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from '../TodoItem/TodoItem';
import AddItemInput from '../AddItemInput/AddItemInput'
import { render } from '@testing-library/react';

const TodoList = () => {
  const [ todoItems, setTodoItems ] = useState([]);

  const addTodoItem = (response) => {
    console.log(response);
    setTodoItemsFromApi();
  };

  const setTodoItemsFromApi = () => {
    axios.get('http://localhost:3000/api/v1/todos').then(response => {
      setTodoItems(response.data)
    }).catch(error => console.log(error))
  };

  useEffect(() => {
    setTodoItemsFromApi();
  }, []);

  const markItemAsDone = (item) => {
    const itemIndex = todoItems.findIndex((i) => i.id === item.id);
    let newArray = [...todoItems];
    newArray[itemIndex] = { ...newArray[itemIndex], done: true };
    setTodoItems(newArray)
  };

  const doneItems = todoItems.filter((item) => item.done);

  const notDoneItems = todoItems.filter((item) => !item.done)

  return (
    <>
      <div className="col-md-6">
        <h3>TodoList</h3>
        <AddItemInput addTodoItem={addTodoItem} />
        { notDoneItems.map((item) => <TodoItem item={item} key={item.id} markItemAsDone={markItemAsDone} />) }
        <p>Items left: {notDoneItems.length}</p>
      </div>

      <div className="col-md-6">
        <h3>Done items</h3>
        { doneItems.map((item) => <p>{item.title}</p>) }
        <p>Items done: {doneItems.length}</p>
      </div>
    </>
  )
};

export default TodoList;