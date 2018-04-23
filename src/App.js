import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import Dashboard from "./components/Dashboard";
import Login from "./components/login";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HashRouter>
          <Switch>
            <Route path="/" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Login} />
          </Switch>
        </HashRouter>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps, null)(App);
