import React from "react";
import SimpleInput from "../../components/simple-input/simple-input.component";
import Button from "../../components/button/button.component";
import "./invite.styles.scss";
import { Link } from "react-router-dom";
const Invite = () => {
  return (
    <div className="auth-page">
      <div className="auth-page-container invite-container">
        <h2>Invite Home Owner</h2>
        <p>Enter Email to invite home owner</p>
        <form action="" className="auth-form">
          <SimpleInput type="email" name="email" required placeholder="Email" />

          <div className="form-buttons">
            <Link to="/">
              <Button type="main">Invite</Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Invite;
