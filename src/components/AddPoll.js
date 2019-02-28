import React, { Component } from "react";
import "./AddPoll.css";

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
    postPoll(this.state).then(() =>
      this.setState({ isSubmitSuccessful: true })
    );
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
              name="phoneModel"
              type="text"
              placeholder="iPhone Xs"
            />
          </label>

          <label>
            Brand:{" "}
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.brand}
              name="brand"
              type="text"
              placeholder="Apple"
            />
          </label>

          <label>
            Price:{" "}
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.price}
              name="price"
              type="number"
              placeholder="1155"
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

          <label>
            Specs:{" "}
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.specs}
              name="specs"
              type="text"
              placeholder="great camera, 8-hour battery"
            />
          </label>

          <button>Submit This Phone</button>
        </form>
      </section>
    );
  }
}

export default AddPoll;
