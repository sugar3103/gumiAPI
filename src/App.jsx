import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GumiApi from "./Component/GumiApi";
import Header from "./Component/Header";

function App() {
  return (
    <Router>
      <Switch>
        <Header>
          <Route path="/" component={GumiApi} />
        </Header>
      </Switch>
    </Router>
  );
}

export default App;
