import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

class NavBar extends Component {
  // Component's constructor, remove if not necessary
  constructor(props) {
    super(props);
    // Component's state, remove if not necessary
    this.state = {};
  }

  // Component structure and display logic go her
  render() {
    const { currentUser } = this.props;
    return (
      <section className="NavBar">
        <h2>poll-n</h2>
        <NavLink exact to="/">
          Home
        </NavLink>

        {currentUser ? (
          <div>
            <h3>{currentUser.username}</h3>
          </div>
        ) : (
          <div>
            <NavLink exact to="/login-form">
              Log In
            </NavLink>
            <NavLink exact to="/signup-form">
              Sign In
            </NavLink>
          </div>
        )}

        <NavLink exact to="/browse-polls">
          Browse Polls
        </NavLink>
        <NavLink exact to="/browse-arguments">
          Browse Arguments
        </NavLink>
        <NavLink exact to="/poll-details">
          Poll's details
        </NavLink>
        <NavLink exact to="/argument-details">
          Argument's details
        </NavLink>
        <NavLink exact to="/add-poll">
          Create Poll
        </NavLink>
        <NavLink exact to="/add-argument">
          Create Argument
        </NavLink>
        <NavLink exact to="/add-vote">
          Create Vote
        </NavLink>
        <NavLink exact to="/update-vote">
          Update Vote
        </NavLink>
      </section>
    );
  }
}

export default NavBar;
