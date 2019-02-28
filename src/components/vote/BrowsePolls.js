import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BrowsePolls.css";
import { getPollList } from "../../api.js";

function getPollAddress(poll) {
  return `/poll-details/${poll._id}`;
}

class BrowsePolls extends Component {
  constructor(props) {
    super(props);
    this.state = { pollArray: [] };
  }

  componentDidMount() {
    getPollList().then(response => {
      console.log("Polls List", response.data);
      this.setState({ pollArray: response.data });
    });
  }

  render() {
    const { pollArray } = this.state;

    return (
      <section className="BrowsePolls">
        <h2>Browse Polls</h2>

        <Link className="addButton" to="/add-poll">
          Submit a new Poll
        </Link>

        <ul>
          {pollArray.map(onePoll => {
            return (
              <li key={onePoll._id}>
                <h4>
                  <Link to={getPollAddress(onePoll)}>{onePoll.shortText}</Link>
                </h4>
                <p>{onePoll.longText}</p>
                <img src={onePoll.image} alt={onePoll.shortText} />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default BrowsePolls;
