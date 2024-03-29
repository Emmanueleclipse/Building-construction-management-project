import React, { useState } from "react";
import HeaderDropDown from "../header-dropdown/header-drop-down.component";
import Person from "../../assets/images/person.jpg";
import { Link } from "react-router-dom";

import "./header.styles.scss";
const Header = () => {
  const [dropActive, setDropActive] = useState(false);
  return (
    <div className="header">
      <div className="header-left">
        <div className="logo">Homes</div>
        <div className="search-container">
          <span class="material-icons">search</span>
          <input type="text" placeholder="Search..." name="search" />
        </div>
      </div>
      <div className="header-right">
        <Link to="/messages">
          <div className="chat-icon">
            <span class="material-icons">chat</span>
          </div>
        </Link>
        <div className="notification-icon">
          <span class="material-icons">notifications</span>
        </div>
        <div
          className="header-user-profile"
          onClick={() => setDropActive((active) => !active)}
        >
          <div className="user-avatar">
            <img src={Person} alt="" />
          </div>
          <div className="user-name">Ronnie Woodkin</div>
          <span class="material-icons">expand_more</span>
        </div>
        {dropActive && <HeaderDropDown />}
      </div>
    </div>
  );
};

export default Header;
