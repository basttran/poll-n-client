import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./SignupPage.css";
import { postSignUp } from "../../api.js";
import NavBar from "../NavBar.js";

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      originalPassword: "",
      originalEmail: "",
      originalUsercode: "",
      errorMessage: "",
      tags: ""
    };
  }

  genericOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    console.log("TAGS", this.state.tags);

    event.preventDefault();
    postSignUp(this.state)
      .then(response => {
        this.setState({
          username: "",
          originalPassword: "",
          originalEmail: "",
          originalUsercode: "",
          errorMessage: "",
          tags: ""
        });
        console.log("Sign Up Result", response.data);
        this.props.signupSuccess(response.data);
      })
      .catch(err => {
        this.setState({ errorMessage: err.response.data.message });
      });
  }

  render() {
    const { currentUser } = this.props;
    return currentUser ? (
      <Redirect to="/" />
    ) : (
      <section className="SignupPage">
        <NavBar
          currentUser={this.state.currentUser}
          title="Sign Up"
          logoutConfirmed={user => this.props.logoutConfirmed(user)}
        />
        <div>
          {this.state.errorMessage && (
            <div className="error-message">{this.state.errorMessage}</div>
          )}

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
              <small id="usernameHelp" className="form-text text-muted">
                Make sure this username isn't too easily identifiable.
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="tags">Tags</label>
              <input
                onChange={event => this.genericOnChange(event)}
                value={this.state.tags}
                name="tags"
                type="text"
                className="form-control"
                id="tags"
                placeholder="Enter tags."
              />
              <small id="tagsHelp" className="form-text text-muted">
                Make sure the chosen terms are 'space-separated'.
              </small>
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
                placeholder="Password here."
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                onChange={event => this.genericOnChange(event)}
                value={this.state.originalEmail}
                name="originalEmail"
                type="email"
                className="form-control"
                id="email"
                placeholder="Email here."
              />
            </div>

            <div className="form-group">
              <label htmlFor="usercode">Social Security Number</label>
              <input
                onChange={event => this.genericOnChange(event)}
                value={this.state.originalUsercode}
                name="originalUsercode"
                type="text"
                className="form-control"
                id="usercode"
                placeholder="Your Social Security Number here."
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default SignupPage;
