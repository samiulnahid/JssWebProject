import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header(props) {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav((prevState) => !prevState);
  };

  console.log(showNav);

  useEffect(() => {
    console.log('useEffect');
  });

  function alert() {
    alert('Logo');
  }

  return (
    <header
      className="header_section"
      style={{ background: 'linear-gradient(130deg, #20146A, #06014B)' }}
    >
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <Link className="navbar-brand" to="/">
            <span onClick={alert}> Finexo </span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            aria-expanded={showNav}
            aria-label="Toggle navigation"
            onClick={toggleNav}
          >
            <span className=""> </span>
          </button>

          <div
            // className={`collapse navbar-collapse`}
            className={`collapse navbar-collapse ${showNav && 'show'}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              {props.rendering?.fields?.items.map((item) => {
                return (
                  <li key={item.id} className="nav-item">
                    <NavLink className="nav-link" to={item.fields?.PageUrl.value.href}>
                      {item.fields?.NavigationTitle.value}
                    </NavLink>
                  </li>
                );
              })}

              <form className="form-inline">
                <button className="btn my-2 my-sm-0 nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </ul>
          </div>
        </nav>
        {/* <small>{JSON.stringify(props)}</small> */}
      </div>
    </header>
  );
}