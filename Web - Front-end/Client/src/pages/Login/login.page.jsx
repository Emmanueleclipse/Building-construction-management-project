import React from "react";
import Button from "../../components/button/button.component";
import FormInput from "../../components/form-input/form-input.component";
import HomeImg from "../../assets/images/home-img.jpg";
import { NavLink } from "react-router-dom";
import "./login.styles.scss";
const Login = () => {
  return (
    <div className="login">
      <div className="login-cover">
        <img src={HomeImg} alt="" />
      </div>
      <div className="login-container">
        <h2>Login</h2>
        <div className="login-avatar">
          <span class="material-icons">person</span>
        </div>
        <form action="">
          <FormInput
            name="email"
            required
            type="email"
            placeholder="Email"
            icon={<span class="material-icons">alternate_email</span>}
          />
          <FormInput
            name="password"
            required
            type="password"
            placeholder="Password"
            icon={<span class="material-icons">lock</span>}
          />
          <NavLink
            to={window.location.search.includes("builder") ? "/activity" : "/"}
          >
            <Button type="main">Login</Button>
          </NavLink>
          <a href="/" className="btn-link">
            Forgot your password ?
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
