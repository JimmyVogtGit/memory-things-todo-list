import React from 'react';
import '../assets/css/Home.css';
import { GlobalContext } from '../context/GlobalContext';
import MyTask from '../components/MyTask';
import MyEndTask from '../components/MyEndTask';

function Home() {
  return (
    <div className='home-container'>
      <form className='form-container'>
        <label>Title :</label>
        <input type='text' />
        <label>Description :</label>
        <textarea type='text' />
        <button>
          add
        </button>
      </form>
      <MyTask />
      <MyEndTask />
    </div>
  );
}

export default Home;
