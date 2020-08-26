import React, { useState } from 'react';
import axios from 'axios';

const AddItemInput = ({ addTodoItem }) => {
  const [ inputValue, setInputValue ] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const createTodo = (e) => {
    if (e.key === 'Enter') {
      axios.post('http://localhost:3000/api/v1/todos', {todo: {title: e.target.value}})
      .then(response => {
        addTodoItem(response)
        setInputValue('')
      })
      .catch(error => console.log(error))      
    }    
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      onKeyDown={createTodo}
    />
  )
};

export default AddItemInput;