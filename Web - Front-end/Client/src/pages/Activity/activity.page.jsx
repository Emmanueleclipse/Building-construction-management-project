import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/button.component";
import FormInput from "../../components/form-input/form-input.component";
import "./activity.styles.scss";

const Activity = () => {
  return (
    <div className="dashboard-page">
      <div className="dashboard-page-heading">
        <h2>Create Activity</h2>
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
                Options :
              </label>
              <div className="check-box-container d-flex">
                <div className="check-box-control">
                  <input type="checkbox" />
                  <label htmlFor="">Private</label>
                </div>
                <div className="check-box-control">
                  <input type="checkbox" />
                  <label htmlFor="">Favourite</label>
                </div>
                <div className="check-box-control">
                  <input type="checkbox" />
                  <label htmlFor="">Milestone</label>
                </div>
              </div>
            </div>
            <div className="form-ctrl">
              <div className="d-flex align-items-center">
                <label htmlFor="">From : </label>
                <FormInput type="date" />
              </div>
              <div className="d-flex align-items-center">
                <label htmlFor="">To : </label>
                <FormInput type="date" />
              </div>
            </div>
            <div className="form-ctrl">
              <label htmlFor="" className="label">
                Title :
              </label>
              <FormInput type="text" placeholder="Enter Title" />
            </div>
            <div className="form-ctrl form-ctrl-textarea">
              <label htmlFor="" className="label">
                Description :
              </label>
              <textarea name="" id="" cols="50" rows="6"></textarea>
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
              <Link to="/invite">
                <Button type="main">Submit</Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Activity;
