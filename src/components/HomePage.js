import React, { Component } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

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
              <Link
                className="btn btn-primary"
                to="/popular-polls"
                role="button"
              >
                Popular Polls
              </Link>
              <Link
                className="btn btn-primary"
                to="/poll-carousel"
                role="button"
              >
                Fresh Polls
              </Link>
              <Link
                className="btn btn-primary"
                to="/poll-swiper"
                role="button"
              >
                Poll Swiper
              </Link>
              <Link className="btn btn-primary" to="/my-polls" role="button">
                My Polls
              </Link>
              <Link className="btn btn-primary" to="/add-poll" role="button">
                Add Poll
              </Link>
              <Link
                className="btn btn-primary"
                to="/user-profile"
                role="button"
              >
                User Profile
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <p>Welcome to the new instant-polls messaging system!</p>
            <p>
              Swipe <i className="fa fa-arrow-left" /> to vote YES
            </p>
            <p>
              Swipe <i className="fa fa-arrow-right" /> to vote NO
            </p>
            <p>Double Tap to Skip</p>
            <div>
              <Link
                className="btn btn-primary"
                to="/popular-polls"
                role="button"
              >
                Popular Polls
              </Link>
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
