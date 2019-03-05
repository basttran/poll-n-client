import React, { Component } from "react";
import ReactSwipe from "react-swipe";
import "./PollCarousel.css";
import { getNextPoll } from "../../api.js";
import PollDetails from "./PollDetails.js";

class PollCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: this.props.currentUser, pollItem: {} };
  }

  componentDidMount() {
    const { currentUser } = this.state;
    getNextPoll(currentUser._id).then(response => {
      console.log("Next Poll", response.data);
      this.setState({ pollItem: response.data });
    });
  }

  render() {
    const { pollItem } = this.state;
    return (
      <section className="PollCarousel">
        <PollDetails pollItem={pollItem} />
      </section>
    );
  }
}

export default PollCarousel;
