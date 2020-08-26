import React from 'react';

const TodoItem = ({ item, markItemAsDone }) => {

  const handleCheck = (event) => {
    if (event.target.checked) {
      markItemAsDone(item);
    }
  };

  return (
    <div>
      <label><input type="checkbox" onChange={handleCheck} />{item.title}</label>
    </div>
  )
};

export default TodoItem;