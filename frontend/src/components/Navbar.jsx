import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo2.png';

import '../assets/css/Navbar.css';

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const changeMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className='navbar-container'>
      <img className='img-logo' src={logo} alt='logo' />
      <h1>
        Things <span className='memory'>Memory</span>
      </h1>
      <button className='btn-menu' onClick={changeMenu}></button>

      {menu ? (
        <div className='container'>
          <div className='overlay' onClick={changeMenu}></div>
          <div className='menu-container'>
            <ul className='ul-link'>
              <li className='link'>
                <Link to='/' style={{ textDecoration: 'none' }}>
                  My Tasks
                </Link>
              </li>
              <br />
              <li className='link'>
                <Link to='/pomodoro' style={{ textDecoration: 'none' }}>
                  Pomodoro
                </Link>
              </li>
            </ul>
            <button className='close-menu' onClick={changeMenu}></button>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
