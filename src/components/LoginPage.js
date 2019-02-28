import React, { Component } from "react";
import "./LoginPage.css";

class LoginPage extends Component {
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
      <section className="LoginPage">
        <h2>LoginPage</h2>
        <form className="LoginForm">
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
              name="password"
              placeholder="Don't tell anyone..."
            />
          </label>
        </form>
      </section>
    );
  }
}

export default LoginPage;
