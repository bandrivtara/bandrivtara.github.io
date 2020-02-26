import React from 'react';
import './App.css';

import Notes from './Notes';
import ToDoList from './ToDoList';

function App() {
  return (
    <div className="App">
      <div class="desk-container">
        <div id="desk">
          <Notes />
          <ToDoList />
        </div>
      </div>
    </div>
  );
}

export default App;
