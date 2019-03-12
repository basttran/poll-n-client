import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { getLogOut } from "../api.js";

class NavBar extends Component {
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
      <section className="NavBar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand polln-title" exact to="/">
            Poll(n)
          </NavLink>

          <div id="title">
            {this.props.title ? (
              <div>
                <h4>{this.props.title}</h4>
              </div>
            ) : (
              <div />
            )}
          </div>

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
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/popular-polls">
                  Popular Polls
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/poll-carousel">
                  Fresh Polls
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/add-poll">
                  Add Poll
                </NavLink>
              </li>

              {currentUser ? (
                <li>
                  <form className="form-inline my-2 my-lg-0">
                    <NavLink className="nav-link" to="/user-profile">
                      Username:
                      <b> {currentUser.username}</b>
                    </NavLink>
                    <button
                      className="btn btn-outline-info my-2 my-sm-0"
                      onClick={event => this.logoutClick(event)}
                    >
                      Log Out
                    </button>
                  </form>
                </li>
              ) : (
                <div>
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
                </div>
              )}
            </ul>
          </div>
        </nav>
      </section>
    );
  }
}

export default NavBar;
