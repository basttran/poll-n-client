import React, { Component } from "react";
import "./AddPoll.css";
import NavBar from "../NavBar.js";
import { postPoll } from "../../api.js";
import { Redirect } from "react-router-dom";

class AddPoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      isSubmitSuccessful: false,
      currentUser: this.props.currentUser
    };
  }

  genericOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("About to postPoll()", event);
    postPoll(this.state).then(response => {
      console.log("Poll added", response.data);
      this.setState({ isSubmitSuccessful: true });
    });
  }

  render() {
    return this.state.isSubmitSuccessful ? (
      <Redirect to="/my-polls" />
    ) : (
      <section className="AddPoll">
        <NavBar currentUser={this.props.currentUser} title="Add Poll" />

        <form onSubmit={event => this.handleSubmit(event)}>
          <div className="form-group">
            <label htmlFor="pollTitle">Title</label>
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.title}
              name="title"
              type="text"
              className="form-control"
              id="pollTitle"
              placeholder="Enter title."
            />
          </div>
          <div className="form-group">
            <label htmlFor="pollDesc">Description</label>
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.description}
              name="description"
              type="text"
              className="form-control"
              id="pollDesc"
              placeholder="Enter description."
            />
          </div>

          <button type="submit" className="btn btn-info">
            Submit This Poll
          </button>
        </form>
      </section>
    );
  }
}

export default AddPoll;
