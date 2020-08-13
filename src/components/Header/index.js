import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Header = (props) => {
  return (
    <header id="page-header">
      <Link id="header-title" to="/">
        <p>MY FRONTEND TEST</p>
      </Link>

      <nav id="menu">
        <Link
          id={window.location.pathname === props.url1 ? "menu-link-selected" : "menu-link"}
          to={props.url1}
        >
          <p>{props.link1}</p>
        </Link>
        <Link
          id={window.location.pathname === props.url2 ? "menu-link-selected" : "menu-link"}
          to={props.url2}
        >
          <p>{props.link2}</p>
        </Link>
      </nav>
    </header>
  )
}

export default Header;