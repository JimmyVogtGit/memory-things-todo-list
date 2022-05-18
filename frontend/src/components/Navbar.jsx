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
      <div className="menu-container">

      </div>
    </div>
  );
}
