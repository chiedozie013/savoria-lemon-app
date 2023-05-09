import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import Logo from "../../images/Logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import classes from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevValue) => !prevValue);
  };

  return (
    <header className={classes.header}>
      <div className={`fluidContainer ${classes.headerContainer}`}>
        <div className={classes.logo}>
          <img src={Logo} alt="Logo" />
        </div>
        <div>
          <nav
            className={`${classes.mainNavigation} ${
              isOpen ? classes.mainNavigationOpen : ""
            }`}
          >
            <menu>
              <li>
                <NavLink exact to="/Home-Page" activeClassName={classes.active}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/" activeClassName={classes.active}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/Menu-Page" activeClassName={classes.active}>
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Reservation-Page"
                  activeClassName={classes.active}
                >
                  Reservations
                </NavLink>
              </li>
              <li>
                <NavLink to="/" activeClassName={classes.active}>
                  Order Online
                </NavLink>
              </li>
            </menu>
          </nav>

          <button className={classes.toggleButton} onClick={toggleMenu}>
            {isOpen ? (
              <FontAwesomeIcon icon={faBars} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
