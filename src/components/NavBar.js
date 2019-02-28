import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

import { getLogOut } from "../api.js";

class NavBar extends Component {
  logoutClick() {
    getLogOut().then(response => {
      console.log("Log Out", response.data);
      this.updateUser(null);
    });
  }

  render() {
    return (
      <section className="NavBar">
        <h2>Poll N</h2>
        <NavLink exact to="/">
          Home
        </NavLink>
        {this.state.currentUser ? (
          <span>
            <b>{this.state.currentUser.username}</b>
            <button onClick={() => this.logoutClick()}>Log Out</button>
          </span>
        ) : (
          <span>
            <NavLink to="/signup-page">Sign Up</NavLink>
            <NavLink to="/login-page">Log In</NavLink>
          </span>
        )}
        <NavLink exact to="/browse-polls">
          Browse Polls
        </NavLink>
      </section>
    );
  }
}

export default NavBar;
