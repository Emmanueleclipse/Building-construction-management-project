import React from "react";
import SimpleInput from "../../components/simple-input/simple-input.component";
import Button from "../../components/button/button.component";
import { useHistory } from "react-router-dom";
import "./signup.styles.scss";
import { Link } from "react-router-dom";
const Register = () => {
  const history = useHistory();
  const isBuilder = history.location.search !== "";
  return (
    <div className="auth-page">
      <div className="auth-page-container">
        <h2>Register</h2>
        <p>Please Enter details to register</p>
        <form action="" className="auth-form">
          <SimpleInput type="text" name="name" required placeholder="Name" />
          <SimpleInput type="email" name="email" required placeholder="Email" />
          <SimpleInput
            type="phone"
            name="phone"
            required
            placeholder="Mobile Number"
          />
          <SimpleInput
            type="password"
            name="password"
            required
            placeholder="Password"
            isPassword
          />
          <SimpleInput
            type="password"
            name="password-confirm"
            required
            placeholder="Password Confirm"
            isPassword
          />
          <div className="form-buttons">
            <Link to={isBuilder ? `/login?type=builder` : `/login`}>
              <Button type="main">Register</Button>
            </Link>
            <p>
              Already have an account ? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
