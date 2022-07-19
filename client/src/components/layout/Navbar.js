import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout, loadUser } from '../../actions/auth';
import img1 from '../../assets/img/about/logo.png'
const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
      <li class="nav-item">
        <Link to='/dashboard'>
          <i className='fas fa-user'></i>
          {'  '}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li class="nav-item">
        <Link to='/Allblogs'>All blogs</Link>
      </li>

      <li class="nav-item">
      <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt'></i>
          {'  '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
      <li class="nav-item">
        <Link to='/Allblogs'>All blogs</Link>
      </li>

      <li class="nav-item">
        <Link to='/register'>Register</Link>
      </li>
      <li class="nav-item">
        <Link to='/login'>Login</Link>
      </li>
     
    </ul>
    
  );

  window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
 

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});



  return (
    <div>  
   
    <nav className='navbar bg-dark'>
       <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div class="container">
            <a class="navbar-brand" href="/"><img src={img1} alt="..." /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ms-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                {loading ? null : (
        <Fragment> {isAuthenticated ? authLinks : guestLinks} </Fragment>
      )}
                </div>
            </div>
        </nav>
     
    </nav>
    </div>
  );
};

Navbar.prototype = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(Navbar);
