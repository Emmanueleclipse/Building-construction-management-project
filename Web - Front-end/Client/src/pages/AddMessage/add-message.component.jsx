import React from "react";
import Button from "../../components/button/button.component";
import FormInput from "../../components/form-input/form-input.component";
import { NavLink } from "react-router-dom";
import "./add-message.styles.scss";

const AddMessage = () => {
  return (
    <div className="dashboard-page">
      <div className="dashboard-page-heading">
        <h2>
          <NavLink className="btn-link" to="/messages">
            Message
          </NavLink>{" "}
          - New Message
        </h2>
      </div>
      <div className="activity-container">
        <div className="activity-card">
          <form action="">
            <div className="form-ctrl">
              <label htmlFor="" className="label">
                Property :
              </label>
              <select className="select-input" name="" id=""></select>
            </div>
            <div className="form-ctrl">
              <label htmlFor="" className="label">
                Send to :
              </label>
              <div className="check-box-container">
                <div className="check-box-control">
                  <input type="checkbox" />
                  <label htmlFor="">Builder</label>
                </div>
              </div>
            </div>

            <div className="form-ctrl">
              <label htmlFor="" className="label">
                Subject :
              </label>
              <FormInput type="text" placeholder="Enter Title" />
            </div>
            <div className="form-ctrl form-ctrl-textarea">
              <label htmlFor="" className="label">
                Message :
              </label>
              <textarea name="" id="" cols="30" rows="4"></textarea>
            </div>
            <div className="form-ctrl">
              <label htmlFor="" className="label">
                Upload media :
              </label>
              <div className="file-upload-btn">
                <label htmlFor="file-upload">Select file</label>
                <input type="file" id="file-upload" />
              </div>
            </div>
            <div className="form-submit">
              <Button type="main">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMessage;
