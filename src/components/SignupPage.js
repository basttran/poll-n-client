import React, { Component } from "react";

class SignupPage extends Component {
  // Component's constructor, remove if not necessary
  constructor(props) {
    super(props);
    // Component's state, remove if not necessary
    this.state = {};
  }
  // Component's method
  componentMethod() {}

  // Component structure and display logic go her
  render() {
    return (
      <section className="SignupPage">
        <h2>SignupPage</h2>
        <form className="SignupForm">
          <label>
            Username:{" "}
            <input type="text" name="username" placeholder="citizenN°4" />
          </label>
          <label>
            Email:{" "}
            <input
              type="email"
              name="email"
              placeholder="mymail@mailprovider.org"
            />
          </label>
          <label>
            Password:{" "}
            <input
              type="password"
              name="originalPassword"
              placeholder="Don't tell anyone..."
            />
          </label>
        </form>
      </section>
    );
  }
}

export default SignupPage;
