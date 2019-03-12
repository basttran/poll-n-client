import React, { Component } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { getLogOut } from "../api.js";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logoutClick(event) {
    const { logoutConfirmed } = this.props;
    event.preventDefault();
    getLogOut().then(response => {
      console.log("Log Out OK", response.data);
      logoutConfirmed();
    });
  }
  
  render() {
    const { currentUser } = this.props;
    return (
      <section className="HomePage">
        <h1 className="polln-title">Poll(n)</h1>
        <img src="pollN-logo-img.png" alt="pollN-logo-img" />

        {currentUser ? (
        
          <div>
            <h2>
              Welcome <b>{currentUser.username}</b> !
            </h2>
            <div>
              <Link
                className="btn btn-primary"
                onClick={event => this.logoutClick(event)}
                to="/"
                role="button"
              >
                Log Out
              </Link>
              <Link
                className="btn btn-primary"
                to="/user-profile"
                role="button"
              >
                User Profile
              </Link>
              <Link className="btn btn-primary" to="/my-polls" role="button">
                My Polls
              </Link>
              <Link className="btn btn-primary" to="/add-poll" role="button">
                Add Poll
              </Link>
              <Link
                className="btn btn-primary"
                to="/poll-swiper"
                role="button"
              >
                Poll Swiper
              </Link>
              
            </div>
          </div>
        ) : (
          <div>
            <p>Welcome to the new instant-vote system!</p>
            <p>
              Swipe <i className="fa fa-arrow-left" /> to vote YES
            </p>
            <p>
              Swipe <i className="fa fa-arrow-right" /> to vote NO
            </p>
            <p>
              Swipe <i className="fa fa-arrow-up" /> to vote BLANK
            </p>            <div>
              <Link className="btn btn-primary" to="/signup-page" role="button">
                Sign Up
              </Link>
              <Link className="btn btn-primary" to="/login-page" role="button">
                Log In
              </Link>
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default HomePage;
