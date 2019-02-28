import React, { Component } from "react";
import "./AddPoll.css";
import { postPoll } from "../../api.js";
import { Redirect } from "react-router-dom";

class AddPoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shortText: "",
      longText: "",
      image: "",
      isSubmitSuccessful: false
    };
  }

  genericOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("about to postPoll()", event);
    postPoll(this.state).then(response => {
      console.log("Add Poll", response.data);
      this.setState({ isSubmitSuccessful: true });
    });
  }

  render() {
    return this.state.isSubmitSuccessful ? (
      <Redirect to="/browse-polls" />
    ) : (
      <section className="AddPoll">
        <h2>Create a new Poll</h2>

        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            Title:{" "}
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.shortText}
              name="shortText"
              type="text"
              placeholder="Title here."
            />
          </label>

          <label>
            Description:{" "}
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.longText}
              name="longText"
              type="text"
              placeholder="Description here."
            />
          </label>

          <label>
            Image URL:{" "}
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.image}
              name="image"
              type="url"
              placeholder="http://example.com"
            />
          </label>

          <button>Submit This Poll</button>
        </form>
      </section>
    );
  }
}

export default AddPoll;
