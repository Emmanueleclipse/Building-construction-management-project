import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/button.component";
import FormInput from "../../components/form-input/form-input.component";
import "./setting.styles.scss";

const Setting = () => {
  return (
    <div className="dashboard-page">
      <div className="dashboard-page-heading">
        <h2>Setting</h2>
      </div>
      <div className="activity-container">
        <div className="activity-card">
          <div className="setting-title">
            <span class="material-icons">email</span>
            <h4 className="text-align-center  mb-5">Email Preferences</h4>
          </div>
          <form action="">
            <div className="form-ctrl setting-input">
              <label htmlFor="" className="label">
                Email Adress :
              </label>
              <FormInput type="text" placeholder="Enter Text..." />
            </div>
            <div className="form-ctrl setting-input">
              <label htmlFor="" className="label">
                Retype Email :
              </label>
              <FormInput type="text" placeholder="Enter Text..." />
            </div>

            <div className="form-ctrl">
              <label htmlFor="" className="label"></label>
              <div className="check-box-container">
                <div className="check-box-control">
                  <input type="checkbox" />
                  <label htmlFor="">Send me fewer emails</label>
                </div>
              </div>
            </div>

            <div className="form-submit">
              <Button type="main">Save</Button>
            </div>
            <Link
              to="/reset-password"
              className="btn-link"
              style={{ color: "#1A45BB" }}
            >
              Change your password
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Setting;
