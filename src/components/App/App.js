import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Chats from "components/Chats";
import Login from "components/Login";
import Signup from "components/Signup";
import ProtectedRoute from "components/ProtectedRoute";

import "../../index.css";

const App = () => (
  <>
    CHAT APP
    <hr />
    <Router>
    <Switch>
        <ProtectedRoute path="/" exact component={Chats} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
    </Switch>
    </Router>
  </>
);

export default App;
