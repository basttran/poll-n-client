import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage.js";
import NavBar from "./components/NavBar.js";
import TabBar from "./components/TabBar.js";
import LoginPage from "./components/LoginPage.js";
import SignupPage from "./components/SignupPage.js";
import BrowsePolls from "./components/BrowsePolls.js";
import BrowseArguments from "./components/BrowseArguments.js";
import PollDetails from "./components/PollDetails.js";
import ArgumentDetails from "./components/ArgumentDetails.js";
import NotFound from "./components/NotFound.js";

// All the components are provisionally made accessible from the HomePage

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login-form" component={LoginPage} />
          <Route path="/signup-form" component={SignupPage} />
          <Route path="/browse-polls" component={BrowsePolls} />
          <Route path="/browse-arguments" component={BrowseArguments} />
          <Route path="/poll-details" component={PollDetails} />
          <Route path="/argument-details" component={ArgumentDetails} />
          <Route path="/add-poll" component={ArgumentDetails} />
          <Route path="/add-argument" component={AddArgument} />
          <Route path="/add-vote" component={AddVote} />
          <Route path="/update-vote" component={UpdateVote} />
          <Route component={NotFound} />
        </Switch>
        <footer className="App-footer">
          <TabBar />
        </footer>
      </div>
    );
  }
}

export default App;
