import React, { Component } from "react";
import "./PollDetails.css";
import { Link } from "react-router-dom";

import { getPollDetails } from "../../api.js";

function postPollAddress(poll) {
  return `/polls/${poll._id}/add-argument`;
}

class PollDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { pollItem: { arguments: [] } };
  }

  componentDidMount() {
    const { params } = this.props.match;
    getPollDetails(params.pollId).then(response => {
      console.log("Poll Details", response.data);
      this.setState({ pollItem: response.data });
    });
  }

  render() {
    const { pollItem } = this.state;
    return (
      <section className="PollDetails">
        <h3>{pollItem.shortText}</h3>
        <p>{pollItem.longText}</p>
        <img src={pollItem.image} alt={pollItem.shortText} />
        <ul>
          {pollItem.arguments.map((argumentItem, index) => {
            return <li key={index}>{argumentItem.shortText}</li>;
          })}
        </ul>
        <Link className="card-link" to="/add-argument">
          Submit a new Argument
        </Link>
      </section>
    );
  }
}

export default PollDetails;
