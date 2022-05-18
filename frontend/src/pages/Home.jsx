import React from 'react';
import '../assets/css/Home.css';
import { GlobalContext } from '../context/GlobalContext';

function Home() {
  return (
    <div>
      <form className='form-container'>
        <label>Title :</label>
        <input type='text' />

        <label>Description :</label>
        <input type='textarea' />
      </form>
    </div>
  );
}

export default Home;
