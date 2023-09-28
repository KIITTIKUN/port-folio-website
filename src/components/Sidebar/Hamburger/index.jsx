import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './index.scss';

const Hamburger = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  useEffect(() => {
    // Add any side effects you need here when the menu state changes (menuOpen).
  }, [menuOpen]);

  return (
    <Menu isOpen={menuOpen} onStateChange={handleMenuStateChange}>
      <NavLink className="menu-item" to="/" onClick={() => setMenuOpen(false)}>
        Home
      </NavLink>
      <NavLink className="menu-item" to="/about" onClick={() => setMenuOpen(false)}>
        About
      </NavLink>
      <NavLink className="menu-item" to="/skill" onClick={() => setMenuOpen(false)}>
        Skill
      </NavLink>
      <NavLink className="menu-item" to="/exp" onClick={() => setMenuOpen(false)}>
        Experience
      </NavLink>
      <NavLink className="menu-item" to="/contact" onClick={() => setMenuOpen(false)}>
        Contact
      </NavLink>
    </Menu>
  );
};

export default Hamburger;
