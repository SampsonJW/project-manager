import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar({ title, icon }) {
  return (
    <nav
      className='navbar navbar-expand-sm navbar-dark'
      style={{ backgroundColor: '#736B92' }}
    >
      <Link to='/' className='navbar-brand' style={{ color: '#ffff' }}>
        <h1>
          <i className={icon} />
          {title}
        </h1>
      </Link>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <div className='navbar-nav'>
          <Link to='/' className='nav-item nav-link'>
            Home
          </Link>
          <Link to='/About' className='nav-item nav-link'>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: '  Project Witch',
  icon: 'fas fa-broom',
};
export default Navbar;
