import React from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import VideoCallPage from "./pages/VideoCallPage";
import "antd/dist/antd.css";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" render={(props) => <HomePage {...props} />} />
        <Route
          path="/video-call"
          render={(props) => <VideoCallPage {...props} />}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
