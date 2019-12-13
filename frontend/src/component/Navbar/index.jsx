import React from 'react';
import { Input, Container, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import FormModal from '../LoginModal';
import {logout} from '../../utils/authHelper'
import './Navbar.scss';

const Navbar = ({ singlePage, isAuthenticated }) => {
  return (
    <div className={ !singlePage? "nav" : "nav grey"}>
      <Container>
        <div className={ !singlePage ? "navbar" : "grey-navbar"}>
          <div className="brand-container">
            <h3 className="brand">CollegeForum</h3>
          </div>
          <div className="btn-container">
            <Input
              icon={{ name: 'search', circular: true, link: true }}
              placeholder='Search...'
              className="search-input"
            />
            {isAuthenticated ? <Button color="red" onClick={logout}>Logout</Button>:<FormModal />}
          </div>
        </div>
      </Container>
    </div>
  )
}

Navbar.propTypes = {
  singlePage: PropTypes.bool,
  isAuthenticated: PropTypes.bool
}

Navbar.defaultProps = {
  singlePage: false,
  isAuthenticated: false
}

export default Navbar;