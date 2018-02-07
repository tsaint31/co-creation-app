import React, { Component } from 'react';
import './App.css';
import Profile from "./modules/profile/profile.js";
import Header from './modules/header/Header';
import Dashboard from './modules/dashboard/Dashboard';
import Createidea from "./modules/ideas/Createidea";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import User from "./modules/user/User";

class App extends Component {



  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/profile" render={() => <Profile />} />
          <Route path="/dashboard" render={() => <Dashboard />} />
          <Route path="/createidea" render={() => <Createidea onSubmit={this.submit}/>} />
          <Route render={() =>
              <div>
                <div><User /></div>
              </div>
          } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
