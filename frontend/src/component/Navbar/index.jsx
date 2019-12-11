import React from 'react';
import Button from '../Button'
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="brand-container">
        <h3 className="brand">NeonSchoolForum</h3>
      </div>
      <div className="btn-container">
        <input className="search-input" placeholder="search topics here"/>
        <Button>Login</Button>
      </div>
    </div>
  )
}

export default Navbar;