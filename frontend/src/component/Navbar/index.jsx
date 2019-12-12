import React from 'react';
import { Input } from 'semantic-ui-react'
import FormModal from '../LoginModal'
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="brand-container">
        <h3 className="brand">NeonSchoolForum</h3>
      </div>
      <div className="btn-container">
        <Input
          icon={{ name: 'search', circular: true, link: true }}
          placeholder='Search...'
          className="search-input"
        />
        <FormModal />
      </div>
    </div>
  )
}

export default Navbar;