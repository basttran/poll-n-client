import React, { Component } from "react";
import ReactSwipe from "react-swipe";
import "./PollCarousel.css";
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
  }

  render() {
    const { pollItem } = this.state;
    // let reactSwipeEl;
    // var hammertime = new Hammer(document.getElementById("carousel"));
    // hammertime.on("pan", function(ev) {
    //   console.log(ev);
    // });

    return (
      <section className="PollCarousel">
        <NavBar currentUser={this.state.currentUser} />
        <ReactSwipe
          id="carousel"
          className="carousel"
          swipeOptions={{ continuous: false }}
          // ref={el => (reactSwipeEl = el)}
        >
          <div>
            <PollDetails
              pollItem={pollItem}
              currentUser={this.state.currentUser}
            />
          </div>
          {/* <div>
            <PollDetails pollItem={pollItem} />
          </div>
          <div>
            <PollDetails pollItem={pollItem} />
          </div> */}
        </ReactSwipe>
      </section>
    );
  }
}

export default PollCarousel;
