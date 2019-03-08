import React, { Component } from "react";
import "./PollCarousel.css";
import ReactSwipe from "react-swipe";
import { votePoll } from "../../api.js";
import { getNextPoll } from "../../api.js";
import NavBar from "../NavBar.js";
import PollDetails from "./PollDetails.js";
import Hammer from "hammerjs";
import { Redirect } from "react-router-dom";

class PollCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      pollItem: {},
      noPollsAvailable: false
    };
  }

  componentDidMount() {
    const { currentUser } = this.props;

    getNextPoll(currentUser._id).then(response => {
      if (response.data === "NO POLLS AVAILABLE") {
        console.log("No Poll Available, will redirect to My Polls now.");
        this.setState({ noPollsAvailable: true });
      }

      console.log("Next Poll", response.data);
      this.setState({ pollItem: response.data });
    });

    // HAMMER JS ELEMENT THAT WILL CATCH ANY TOUCH INPUT
    const touchHandler = new Hammer(document.getElementById("carousel"));

    // SWIPE INPUT (ONLY LEFT OR RIGHT), UNUSED AT THE MOMENT SINCE REACT-SWIPE ALREADY HANDLES THESE INPUTS
    // I'M LEAVING THOSE HERE JUST IN CASE WE NEED IT IN THE FUTURE (ALL THEY DO IS CONSOLE.LOG)
    // touchHandler.get("swipe").set({ direction: Hammer.DIRECTION_ALL });
    // touchHandler.on("swipe", function(ev) {
    //   console.log(ev);
    // });

    // ON DOUBLE TAP, WILL VOTE "2" TO CURRENT POLL & CALL FOR NEXT POLL TO LOAD
    touchHandler.on("doubletap", function() {
      const { currentUser } = this.props;
      const { pollItem } = this.state;
      let voteValue = 2;
      let voteSubmission = { currentUser, pollItem, voteValue };
      votePoll(voteSubmission).then(
        getNextPoll(currentUser._id).then(response => {
          if (response.data === "NO POLLS AVAILABLE") {
            console.log("No Poll Available, will redirect to My Polls now.");
            this.setState({ noPollsAvailable: true });
          }
          console.log("Next Poll", response.data);
          this.setState({ pollItem: response.data });
        })
      );
    });
  }

  render() {
    const { currentUser, logoutConfirmed } = this.props;
    const { pollItem, noPollsAvailable } = this.state;

    return noPollsAvailable ? (
      <Redirect
        to="my-polls"
        errormsg="No more polls available at the moment. Feel free to add more."
      />
    ) : (
      <section className="PollCarousel">
        <NavBar
          currentUser={currentUser}
          title="Fresh Polls"
          logoutConfirmed={user => logoutConfirmed(user)}
        />
        <ReactSwipe
          id="carousel"
          className="carousel"
          swipeOptions={{
            continuous: false,
            swiping: function(ev) {
              console.log(ev);
              if (ev > 0.25) {
                let voteValue = 1;
                let voteSubmission = { currentUser, pollItem, voteValue };
                votePoll(voteSubmission).then(
                  getNextPoll(currentUser._id).then(response => {
                    if (response.data === "NO POLLS AVAILABLE") {
                      console.log(
                        "No Poll Available, will redirect to My Polls now."
                      );
                      this.setState({ noPollsAvailable: true });
                    }
                    console.log("Next Poll", response.data);
                    this.setState({ pollItem: response.data });
                  })
                );
              }
              if (ev < -0.25) {
                let voteValue = 0;
                let voteSubmission = { currentUser, pollItem, voteValue };
                votePoll(voteSubmission).then(
                  getNextPoll(currentUser._id).then(response => {
                    if (response.data === "NO POLLS AVAILABLE") {
                      console.log(
                        "No Poll Available, will redirect to My Polls now."
                      );
                      this.setState({ noPollsAvailable: true });
                    }
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
              pollItem={pollItem}
              currentUser={currentUser}
              reloadPollDetails={() => getNextPoll(currentUser._id)}
            />
          </div>
        </ReactSwipe>
      </section>
    );
  }
}

export default PollCarousel;
