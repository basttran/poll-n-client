import React, { Component } from "react";
import "./PollCarousel.css";
import ReactSwipe from "react-swipe";
import { votePoll } from "../../api.js";
import { getNextPoll } from "../../api.js";
import NavBar from "../NavBar.js";
import PollDetails from "./PollDetails.js";
import Hammer from "hammerjs";

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

    // HAMMER JS ELEMENT THAT WILL CATCH ANY TOUCH INPUT
    const touchHandler = new Hammer(document.getElementById("carousel"));

    // SWIPE INPUT (ONLY LEFT OR RIGHT), UNUSED AT THE MOMENT SINCE REACT-SWIPE ALREADY HANDLES THESE INPUTS
    // I'M LEAVING THOSE HERE JUST IN CASE WE NEED IT IN THE FUTURE (ALL THEY DO IS CONSOLE.LOG)
    touchHandler.get("swipe").set({ direction: Hammer.DIRECTION_ALL });
    touchHandler.on("swipe", function(ev) {
      console.log(ev);
    });

    // ON DOUBLE TAP, WILL VOTE "2" TO CURRENT POLL & CALL FOR NEXT POLL TO LOAD
    touchHandler.on("doubletap", function() {
      // I'M NOT SURE HOW THIS SHOULD BE CORRECTLY WRITTEN -> basically, what i want is to call the api saying "here's the vote value from this user to this poll" & next call the nex-poll api route to retrieve a new poll to display
      votePoll(2).then(
        getNextPoll(currentUser._id).then(response => {
          console.log("Next Poll", response.data);
          this.setState({ pollItem: response.data });
        })
      );
    });
  }

  render() {
    const { currentUser } = this.state;

    return (
      <section className="PollCarousel">
        <NavBar currentUser={this.state.currentUser} title="Fresh Polls" />
        <ReactSwipe
          id="carousel"
          className="carousel"
          swipeOptions={{
            continuous: false,
            swiping: function(ev) {
              console.log(ev);
              if (ev > 0.25) {
                votePoll(1).then(
                  getNextPoll(currentUser._id).then(response => {
                    console.log("Next Poll", response.data);
                    this.setState({ pollItem: response.data });
                  })
                );
              }
              if (ev < -0.25) {
                votePoll(0).then(
                  getNextPoll(currentUser._id).then(response => {
                    console.log("Next Poll", response.data);
                    this.setState({ pollItem: response.data });
                  })
                );
              }
            }
          }}
        >
          <div>
            <PollDetails
              pollItem={this.state.pollItem}
              currentUser={this.state.currentUser}
            />
          </div>
        </ReactSwipe>
      </section>
    );
  }
}

export default PollCarousel;
