import React, { Component } from "react";
import "./AddArgument.css";
import { postArgument } from "../../api.js";
// import { Redirect } from "react-router-dom";
// not sure we are currently redirecting | needs to be checked

class AddArgument extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shortText: "",
      longText: "",
      ref: "",
      isSubmitSuccessful: false,
      pollId: ""
    };
  }

  componentDidMount() {
    // get path params from React router props
    const { params } = this.props.match;
    // use the ID in path params to get the details from the backend API
    this.setState({ pollId: params.pollId });
  }

  genericOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("about to postPoll()", event);
    postArgument(this.state).then(response => {
      console.log("Add Argument", response.data);
      this.setState({ isSubmitSuccessful: true });
    });
  }
  render() {
    const { pollId } = this.state;
    return (
      <section className="AddArgument">
        <h2>AddArgument</h2>
        <h3>{pollId}</h3>
        <form>
          <label>
            Title:{" "}
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.shortText}
              name="shortText"
              type="text"
              placeholder="The point"
            />
          </label>
          <label>
            Description:{" "}
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.longText}
              name="longText"
              type="text"
              placeholder="Explain how the argument relates to the poll's topic"
            />
          </label>
          <label>
            Reference:{" "}
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.ref}
              name="ref"
              type="url"
              placeholder="http://www.mysourceurl.org"
            />
          </label>
          <button>Submit Argument</button>
        </form>
      </section>
    );
  }
}

export default AddArgument;

// shortText: { type: String, required: true, minlength: 5 },
// longText: { type: String, required: true, minlength: 10, maxlength: 250 },
// ref: [{ type: String, match: /^https?:\/\// }],
// inPolls: [{ type: Schema.Types.ObjectId, ref: "Polls", required: true }],
// voteArgs: [{ type: Schema.Types.ObjectId, ref: "VoteArg", required: true }]
