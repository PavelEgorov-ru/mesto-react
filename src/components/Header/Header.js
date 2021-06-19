import React from 'react';
import logo from './../../images/Vector.svg';

function Header () {
  return (
    <div className="header section section_size_narrow">
      <img src={logo} alt="логотип место Россия" className="logo" />
    </div>
  )
};

export default Header;