import "./App.css";
import { Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing/landing.page";
import Login from "./pages/Login/login.page";
import Dashboard from "./pages/Dashboard/dashboard.component";
import Register from "./pages/Signup/signup.page";
import Invite from "./pages/Invite/invite.component";
import ResetPassword from "./pages/ResetPassword/reset-password.component";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/welcome" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/invite" component={Invite} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
