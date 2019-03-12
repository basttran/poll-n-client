import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage.js";
import LoginPage from "./components/auth/LoginPage.js";
import SignupPage from "./components/auth/SignupPage.js";
import PollCarousel from "./components/vote/PollCarousel.js";
import PopularPolls from "./components/vote/PopularPolls.js";
import AddPoll from "./components/vote/AddPoll.js";
import PollDetails from "./components/vote/PollDetails.js";
import NotFound from "./components/NotFound.js";
import ProfilePage from "./components/auth/ProfilePage.js";
import MyPolls from "./components/vote/MyPolls.js";
import PollSwiper from "./components/vote/PollSwiper.js";

class App extends Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <HomePage currentUser={this.state.currentUser} />;
            }}
          />
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
          <Route
            path="/user-profile"
            render={() => {
              return <ProfilePage currentUser={this.state.currentUser} />;
            }}
          />
          <Route
            path="/add-poll"
            render={() => {
              return (
                <AddPoll
                  currentUser={this.state.currentUser}
                  logoutConfirmed={user => this.updateUser(user)}
                />
              );
            }}
          />
          <Route
            path="/poll-carousel"
            render={() => {
              return (
                <PollCarousel
                  currentUser={this.state.currentUser}
                  logoutConfirmed={user => this.updateUser(user)}
                />
              );
            }}
          />
          <Route
            path="/poll-swiper"
            render={() => {
              return (
                <PollSwiper
                  currentUser={this.state.currentUser}
                  logoutConfirmed={user => this.updateUser(user)}
                />
              );
            }}
          />
          <Route path="/poll-details/:pollId" component={PollDetails} />
          <Route
            path="/popular-polls"
            render={() => {
              return (
                <PopularPolls
                  currentUser={this.state.currentUser}
                  logoutConfirmed={user => this.updateUser(user)}
                />
              );
            }}
          />
          <Route
            path="/my-polls"
            render={() => {
              return (
                <MyPolls
                  currentUser={this.state.currentUser}
                  logoutConfirmed={user => this.updateUser(user)}
                />
              );
            }}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
