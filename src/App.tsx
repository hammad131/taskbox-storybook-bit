import React from 'react';

import './App.css';
import TaskBox from './components/Taskbox/index';

function App() {
  const tasks = [
    { title: 'new', done: false },
    { title: 'new', done: true },
    { title: 'new', done: false },
  ]
  return (
    <div className="App">
      <TaskBox tasks={tasks} theme="primary" />
    </div>
  );
}

export default App;
