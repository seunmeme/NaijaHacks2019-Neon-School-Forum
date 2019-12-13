import React from 'react';
import { Input, Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import FormModal from '../LoginModal';
import './Navbar.scss';

const Navbar = ({ singlePage }) => {
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
            <FormModal />
          </div>
        </div>
      </Container>
    </div>
  )
}

Navbar.propTypes = {
  singlePage: PropTypes.bool
}

Navbar.defaultProps = {
  singlePage: false
}

export default Navbar;