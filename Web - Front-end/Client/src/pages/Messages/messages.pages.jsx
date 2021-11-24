import React from "react";
import Button from "../../components/button/button.component";
import Person2 from "../../assets/images/person2.jpg";

import { NavLink } from "react-router-dom";
import "./messages.styles.scss";

const Messages = () => {
  return (
    <div className="dashboard-page">
      <div className="dashboard-page-heading">
        <h2>Messages</h2>
      </div>
      <div className="messages-container">
        <div className="messages-header">
          <NavLink to="/messages/add">
            <Button type="main">Add Message</Button>
          </NavLink>
        </div>
        <div className="messages-list">
          <div className="message-card">
            <div className="message-card-left">
              <div className="message-sender">
                <div className="message-sender-img">
                  <img src={Person2} alt="" />
                </div>
                <div className="message-sender-info">
                  <div className="message-sender-info-name">M.LAFLEUR</div>
                  <div className="message-sender-info-date">1ST - 14:33</div>
                </div>
              </div>
              <div className="message-content">Read your message...</div>
            </div>
            <div className="message-card-right">
              <a href="/" className="btn-link">
                more...
              </a>
            </div>
          </div>
          <div className="message-card">
            <div className="message-card-left">
              <div className="message-sender">
                <div className="message-sender-img">
                  <img src={Person2} alt="" />
                </div>
                <div className="message-sender-info">
                  <div className="message-sender-info-name">M.LAFLEUR</div>
                  <div className="message-sender-info-date">1ST - 14:33</div>
                </div>
              </div>
              <div className="message-content">Read your message...</div>
            </div>
            <div className="message-card-right">
              <a href="/" className="btn-link">
                more...
              </a>
            </div>
          </div>
          <div className="message-card">
            <div className="message-card-left">
              <div className="message-sender">
                <div className="message-sender-img">
                  <img src={Person2} alt="" />
                </div>
                <div className="message-sender-info">
                  <div className="message-sender-info-name">M.LAFLEUR</div>
                  <div className="message-sender-info-date">1ST - 14:33</div>
                </div>
              </div>
              <div className="message-content">Read your message...</div>
            </div>
            <div className="message-card-right">
              <a href="/" className="btn-link">
                more...
              </a>
            </div>
          </div>
          <div className="message-card">
            <div className="message-card-left">
              <div className="message-sender">
                <div className="message-sender-img">
                  <img src={Person2} alt="" />
                </div>
                <div className="message-sender-info">
                  <div className="message-sender-info-name">M.LAFLEUR</div>
                  <div className="message-sender-info-date">1ST - 14:33</div>
                </div>
              </div>
              <div className="message-content">Read your message...</div>
            </div>
            <div className="message-card-right">
              <a href="/" className="btn-link">
                more...
              </a>
            </div>
          </div>
          <div className="pagination-container">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="/">
                    <span class="material-icons">chevron_left</span>
                  </a>
                </li>
                <li class="page-item active">
                  <a class="page-link" href="/">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/">
                    <span class="material-icons">chevron_right</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
