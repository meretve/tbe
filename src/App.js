import React from 'react';
import './App.scss';
import TodoList from './components/TodoList/TodoList'

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">Home</li>
                <li className="nav-item">Lists</li>
                <li className="nav-item">Log out</li>
              </ul>
            </nav>
          </header>
        </div>
      </div> 

      <div className="row">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
