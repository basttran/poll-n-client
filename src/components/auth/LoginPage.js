import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./LoginPage.css";
import { postLogIn } from "../../api.js";
import NavBar from "../NavBar.js";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      originalPassword: ""
    };
  }

  genericOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    postLogIn(this.state).then(response => {
      console.log("Log In", response.data);
      this.props.loginSuccess(response.data);
    });
  }

  render() {
    return this.props.currentUser ? (
      <Redirect to="/" />
    ) : (
      <section className="LoginPage">
        <NavBar
          currentUser={this.state.currentUser}
          title="Log In"
          logoutConfirmed={user => this.props.logoutConfirmed(user)}
        />
        <form onSubmit={event => this.handleSubmit(event)}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.username}
              name="username"
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter username."
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.originalPassword}
              name="originalPassword"
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter username."
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
        </form>
      </section>
    );
  }
}

export default LoginPage;
