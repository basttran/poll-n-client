import React, { Component } from "react";
import "./AddPoll.css";
import { postPoll } from "../../api.js";
import { Redirect } from "react-router-dom";
// not sure we are currently redirecting | needs to be checked

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
        <form onSubmit={event => this.handleSubmit(event)}>
          <div className="form-group">
            <label htmlFor="pollTitle">Title</label>
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.shortText}
              name="shortText"
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
              value={this.state.longText}
              name="longText"
              type="text"
              className="form-control"
              id="pollDesc"
              placeholder="Enter description."
            />
          </div>
          <div className="form-group">
            <label htmlFor="pollImage">Image URL</label>
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.image}
              name="image"
              type="url"
              className="form-control"
              id="pollImage"
              placeholder="Enter Image URL."
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
