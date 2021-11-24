import React from "react";
import Button from "../../components/button/button.component";
import FormInput from "../../components/form-input/form-input.component";
import Data1 from "../../assets/images/data1.jpg";
import Data2 from "../../assets/images/data2.jpg";
import Building1 from "../../assets/images/building1.jpg";
import Building2 from "../../assets/images/building2.jpg";
import Building3 from "../../assets/images/building3.jpg";

import "./home.styles.scss";

const Home = () => {
  return (
    <div className="dashboard-page">
      <div className="dashboard-page-heading">
        <h2>Home</h2>
      </div>
      <div className="home-container">
        <div className="home-search">
          <label htmlFor="">Enter date : </label>
          <div className="home-search-control">
            <FormInput type="date" />
            <button>Submit</button>
          </div>
        </div>
        <div className="home-content">
          <div className="home-head-card">
            <div className="home-head-card-left">
              <div>Today</div>
              <span class="material-icons">settings</span>
            </div>
            <div className="home-head-card-right">
              <Button type="main">Reports</Button>
            </div>
          </div>
          <div className="home-cards-list">
            <div className="home-card">
              <div className="home-card-header">
                <div className="home-card-left">
                  <div className="home-card-img">
                    <img src={Building1} alt="" />
                  </div>
                  <div className="home-card-info">
                    <div className="home-card-title">Slab Preparation</div>
                    <div className="home-card-subtitle">phase 2</div>
                  </div>
                </div>
                <div className="home-card-right">
                  <span class="material-icons">dns</span>
                  <span class="material-icons">attach_money</span>
                </div>
              </div>
              <div className="home-card-detail"></div>
            </div>
            <div className="home-card">
              <div className="home-card-header">
                <div className="home-card-left">
                  <div className="home-card-img">
                    <img src={Building2} alt="" />
                  </div>
                  <div className="home-card-info">
                    <div className="home-card-title">Plans</div>
                    <div className="home-card-subtitle">phase 1</div>
                  </div>
                </div>
                <div className="home-card-right">
                  <span class="material-icons">dns</span>
                  <span class="material-icons">attach_money</span>
                </div>
              </div>
              <div className="home-card-detail"></div>
            </div>
            <div className="home-card">
              <div className="home-card-header">
                <div className="home-card-left">
                  <div className="home-card-img">
                    <img src={Building3} alt="" />
                  </div>
                  <div className="home-card-info">
                    <div className="home-card-title">Plans</div>
                    <div className="home-card-subtitle">phase 1</div>
                  </div>
                </div>
                <div className="home-card-right">
                  <span class="material-icons">dns</span>
                  <span class="material-icons">attach_money</span>
                </div>
              </div>
              <div className="home-card-detail">
                <div className="home-card-img">
                  <img src={Data1} alt="" />
                </div>
                <div className="home-card-img">
                  <img src={Data2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
