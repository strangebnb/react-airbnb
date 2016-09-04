import React from 'react';
import {Component} from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, DefaultRoute, IndexLink } from 'react-router'
import { stack as Menu } from 'react-burger-menu';
import Radium from 'radium';
require ('./navbar.component.scss');

let RadiumLink = Radium(Link);

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '24px',
    height: '20px',
    left: '10px',
    top: '25px'
  },
  bmBurgerBars: {
    background: '#ff5a5f'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

//Code for the NavBar
var Navbar = React.createClass({
  render: function() {
    return (

      <header className="header">
        {/* <Menu styles={ styles }>
          <RadiumLink id="home" className="menu-item" to="/">Home</RadiumLink>
          <RadiumLink id="about" className="menu-item" to="/host">Become a Host</RadiumLink>
          <RadiumLink id="contact" className="menu-item" to="/signup">Sign Up</RadiumLink>
          <RadiumLink id="login" className="menu-item" to="/login">Login</RadiumLink>
        </Menu> */}
        <a href='/home'><img className="air-logo" src="./assets/images/airbnb.png" /></a>
        <nav className="menu">
          <a href='/BecomeAHost.html'><span className="become-host">Become a Host</span></a>
        {/* <span className="left-border-menu"><IndexLink to="/host">Help</IndexLink></span>
        <span className="left-border-menu"><IndexLink to="/host">Sign Up</IndexLink></span> */}
        <a href='/login'><span className="left-border-menu">Login</span></a>
          </nav>
        </header>
        );
  }
});

export default Navbar;
