import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

import { getLogOut } from "../api.js";

class NavBar extends Component {
  logoutClick() {
    getLogOut().then(response => {
      console.log("Log Out OK", response.data);
      this.props.logoutConfirmed();
    });
  }

  render() {
    const { currentUser } = this.props;
    return (
      <section className="NavBar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" exact to="/">
            <img src="pollN-logo-img.png" alt="pollN-logo-img" />
            <img src="pollN-logo-text.svg" alt="pollN-logo-text" />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/browse-polls">
                  Browse All Polls
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/add-poll">
                  Create New Poll
                </NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>

          {currentUser ? (
            <form className="form-inline my-2 my-lg-0">
              <NavLink className="nav-link" to="/user-profile">
                {currentUser.username}
              </NavLink>
              <button
                className="btn btn-outline-info my-2 my-sm-0"
                onClick={() => this.logoutClick()}
              >
                Log Out
              </button>
            </form>
          ) : (
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup-page">
                  Sign Up
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login-page">
                  Log In
                </NavLink>
              </li>
            </ul>
          )}
        </nav>
      </section>
    );
  }
}

export default NavBar;
