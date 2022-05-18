import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Pomodoro from './components/Pomodoro';
import TaskDescribe from './components/TaskDescribe';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pomodoro' element={<Pomodoro />} />
          <Route path='/my-task/:id' element={<TaskDescribe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
