import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import './index.scss'

class Hamburger extends React.Component {
  showSettings (event) {
    event.preventDefault();
    // .
    // .
    // .
  }

  render () {
    return (
      <Menu>
        <a className="menu-item" href="/">Home</a>
        <a className="menu-item" href="/about">About</a>
        <a className="menu-item" href="/skill">Skill</a>
        <a className="menu-item" href="/exp">Experience</a>
        <a className="menu-item" href="/contact">Contact</a>
      </Menu>
    );
  }

}

export default Hamburger