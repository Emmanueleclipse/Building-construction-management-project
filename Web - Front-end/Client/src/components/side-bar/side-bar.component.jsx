import React from "react";
import "../side-bar/side-bar.styles.scss";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="side-bar-container">
      <Link to="/">
        <div className="side-bar-item">
          <div className="side-bar-item-icon">
            <span class="material-icons">home</span>
          </div>
          <div className="side-bar-item-label">Home</div>
        </div>
      </Link>
      <Link to="/activity">
        <div className="side-bar-item">
          <div className="side-bar-item-icon">
            <span class="material-icons">calendar_today</span>
          </div>
          <div className="side-bar-item-label">Activity</div>
        </div>
      </Link>
      <Link to="/crew">
        <div className="side-bar-item">
          <div className="side-bar-item-icon">
            <span class="material-icons">people</span>
          </div>
          <div className="side-bar-item-label">Crew</div>
        </div>
      </Link>
      <Link to="/">
        <div className="side-bar-item">
          <div className="side-bar-item-icon">
            <span class="material-icons">save_alt</span>
          </div>
          <div className="side-bar-item-label">Resources</div>
        </div>
      </Link>

      <Link to="/">
        <div className="side-bar-item">
          <div className="side-bar-item-icon">
            <span class="material-icons">help_outline</span>
          </div>
          <div className="side-bar-item-label">Help Center</div>
        </div>
      </Link>
      <Link to="/login">
        <div className="side-bar-item">
          <div className="side-bar-item-icon">
            <span class="material-icons">logout</span>
          </div>
          <div className="side-bar-item-label">Logout</div>
        </div>
      </Link>
    </div>
  );
};

export default SideBar;
