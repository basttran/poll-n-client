import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./LoginPage.css";
import { postLogIn } from "../../api.js";

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
      <Redirect to="/browse-polls" />
    ) : (
      <section className="LoginPage">
        <h2>Log In</h2>

        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            Username:
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.username}
              name="username"
              type="text"
              placeholder="Your username here."
            />
          </label>

          <label>
            Password:
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.originalPassword}
              name="originalPassword"
              type="password"
              placeholder="Your password here."
            />
          </label>

          <button>Log In</button>
        </form>
      </section>
    );
  }
}

export default LoginPage;
