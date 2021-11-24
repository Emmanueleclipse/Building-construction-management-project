import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/home.page";
import Header from "../../components/header/header.component";
import SideBar from "../../components/side-bar/side-bar.component";
import Activity from "../Activity/activity.page";
import "./dashboard.styles.scss";
import Messages from "../Messages/messages.pages";
import AddMessage from "../AddMessage/add-message.component";
import ResetPassword from "../ResetPassword/reset-password.component";
import Crew from "../crew/crew.component";
import Setting from "../Setting/setting.component";
import MobileBar from "../../components/mobile-bar/mobile-bar.component";
import MobileExpand from "../../components/mobile-expand-bar/mobile-expand-bar";
import MobileBackBtn from "../../components/mobile-back-btn/mobile-back-btn.component";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Header />
      <SideBar />
      <MobileBar />
      <MobileBackBtn />
      <div className="dashboard">
        <Switch>
          <Route exact path="/setting" component={Setting} />
          <Route exact path="/reset-password" component={ResetPassword} />
          <Route exact path="/crew" component={Crew} />
          <Route exact path="/messages" component={Messages} />
          <Route path="/activity" component={Activity} />
          <Route exact path="/messages/add" component={AddMessage} />
          <Route exact path="/more" component={MobileExpand} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
