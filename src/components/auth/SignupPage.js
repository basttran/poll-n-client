import React, { Component } from "react";

import "./SignupPage.css";
import { postSignUp } from "../../api.js";

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      originalPassword: "",
      originalEmail: "",
      originalUsercode: ""
    };
  }

  genericOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    postSignUp(this.state).then(response => {
      console.log("Sign Up Result", response.data);
      this.props.signupSuccess(response.data);
    });
  }

  render() {
    const { currentUser } = this.props;
    return (
      <section className="SignupPage">
        {currentUser ? (
          <div>
            <h2>You are signed up!</h2>
            <p>Welcome, {currentUser.username}!</p>
          </div>
        ) : (
          <div>
            <h2>Sign Up</h2>

            <form onSubmit={event => this.handleSubmit(event)}>
              <label>
                Username:
                <input
                  onChange={event => this.genericOnChange(event)}
                  value={this.state.fullName}
                  name="username"
                  type="text"
                  placeholder="Please insert a non-identifiable username."
                />
              </label>

              <label>
                Password:
                <input
                  onChange={event => this.genericOnChange(event)}
                  value={this.state.originalPassword}
                  name="originalPassword"
                  type="password"
                  placeholder="Password here."
                />
              </label>

              <label>
                Email:
                <input
                  onChange={event => this.genericOnChange(event)}
                  value={this.state.email}
                  name="email"
                  type="email"
                  placeholder="john@doe.com"
                />
              </label>

              <label>
                Social Security Number:
                <input
                  onChange={event => this.genericOnChange(event)}
                  value={this.state.email}
                  name="usercode"
                  type="usercode"
                  placeholder="Your social security number here."
                />
              </label>

              <button>Sign Up</button>
            </form>
          </div>
        )}
      </section>
    );
  }
}

export default SignupPage;