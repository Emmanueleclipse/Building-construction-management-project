import React from "react";
import Button from "../../components/button/button.component";
import SimpleInput from "../../components/simple-input/simple-input.component";
import "./reset-password.styles.scss";

const ResetPassword = () => {
  return (
    <div className="dashboard-page">
      <div className="dashboard-page-heading">
        <h2>Reset</h2>
      </div>
      <div className="activity-container">
        <div className="activity-card reset-container">
          <div className="setting-title">
            <h4 className="text-align-center  mb-5">Reset Password</h4>
          </div>
          <form action="" className="reset-form">
            <SimpleInput
              type="password"
              name="password"
              required
              placeholder="New password"
              isPassword
            />
            <SimpleInput
              type="password"
              name="repeat-password"
              required
              placeholder="Repeat password"
              isPassword
            />

            <div className="form-buttons">
              <Button type="main">Reset</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
