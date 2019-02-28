import React, { Component } from "react";
import "./BrowsePolls.css";

import { getPollList } from "../api.js";

class BrowsePolls extends Component {
  // Component's constructor, remove if not necessary
  constructor(props) {
    super(props);
    // Component's state, remove if not necessary
    this.state = {
      pollArray: []
    };
  }
  // Component's method
  componentDidMount() {
    getPollList().then(response => {
      // ALWAYS console.log() response.data to see what the API gave you
      console.log("Ongoing Polls", response.data);
      // save the JSON data from the API into the state
      this.setState({ pollArray: response.data });
    });
  }
  componentMethod() {}

  // Component structure and display logic go her
  render() {
    const { pollArray } = this.state;

    return (
      <section className="BrowsePolls">
        <h2>BrowsePolls</h2>
        <ul>
          {pollArray.map(onePoll => {
            return (
              <li>
                <h4>{onePoll.shortText}</h4>
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
