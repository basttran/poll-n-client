import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage.js";
import NavBar from "./components/NavBar.js";
import LoginPage from "./components/auth/LoginPage.js";
import SignupPage from "./components/auth/SignupPage.js";
// import BrowsePolls from "./components/BrowsePolls.js";
// import BrowseArguments from "./components/vote/BrowseArguments.js";
// import PollDetails from "./components/vote/PollDetails.js/index.js";
// import ArgumentDetails from "./components/vote/ArgumentDetails.js";
// import AddArgument from "./components/vote/AddArgument.js/index.js";
// import AddPoll from "./components/vote/AddPoll.js/index.js";
// import AddVote from "./components/vote/AddVote.js";
// import EditVote from "./components/vote/EditVote.js/index.js";
import NotFound from "./components/NotFound.js";

import { getLogOut } from "./api";

class App extends Component {
  constructor(props) {
    super(props);
    // get the initial value of currentUser from localStorage
    let userInfo = localStorage.getItem("currentUser");
    if (userInfo) {
      userInfo = JSON.parse(userInfo);
    }
    this.state = {
      currentUser: userInfo
    };
  }

  updateUser(newUser) {
    if (newUser) {
      //save the user info in localStorage if we are logged IN
      localStorage.setItem("currentUser", JSON.stringify(newUser));
    } else {
      // delete the user info from localStorage if we are logging OUT
      localStorage.removeItem("currentUser");
    }
    this.setState({ currentUser: newUser });
  }

  logoutClick() {
    getLogOut().then(response => {
      console.log("Log Out", response.data);
      this.updateUser(null);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/signup-page"
            render={() => {
              return (
                <SignupPage
                  currentUser={this.state.currentUser}
                  signupSuccess={user => this.updateUser(user)}
                />
              );
            }}
          />
          <Route
            path="/login-page"
            render={() => {
              return (
                <LoginPage
                  currentUser={this.state.currentUser}
                  loginSuccess={user => this.updateUser(user)}
                />
              );
            }}
          />
          {/* <Route path="/browse-polls" component={BrowsePolls} />
          <Route path="/browse-arguments" component={BrowseArguments} />
          <Route path="/poll-details" component={PollDetails} />
          <Route path="/argument-details" component={ArgumentDetails} />
          <Route path="/add-poll" component={AddPoll} />
          <Route path="/add-argument" component={AddArgument} />
          <Route path="/add-vote" component={AddVote} />
          <Route path="/edit-vote" component={EditVote} /> */}
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
