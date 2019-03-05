import React, { Component } from "react";

import "./HomePage.css";

class HomePage extends Component {
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
              <a
                className="btn btn-primary"
                href="/popular-polls"
                role="button"
              >
                Popular Polls
              </a>
              <a
                className="btn btn-primary"
                href="/poll-carousel"
                role="button"
              >
                Fresh Polls
              </a>
              <a className="btn btn-primary" href="/my-polls" role="button">
                My Polls
              </a>
              <a className="btn btn-primary" href="/user-profile" role="button">
                User Profile
              </a>
            </div>
          </div>
        ) : (
          <div>
            <p>Welcome to the new instant-polls messaging system!</p>
            <p>Swipe left = Yes</p>
            <p>Swipe right = No</p>
            <p>Swipe up = Skip</p>
            <p>View More = Current Most Popular Polls</p>
            <div>
              <a
                className="btn btn-primary"
                href="/popular-polls"
                role="button"
              >
                View More
              </a>
              <a className="btn btn-primary" href="/signup-page" role="button">
                Sign Up
              </a>
              <a className="btn btn-primary" href="/login-page" role="button">
                Log In
              </a>
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default HomePage;
