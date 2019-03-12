import React, { Component } from "react";
import "./PollSwiper.css";
import { votePoll } from "../../api.js";
import { getNewPoll } from "../../api.js";
import { Link } from "react-router-dom";
import NavBar from "../NavBar.js";

import { getNextPoll } from "../../api.js";
import { swipePoll } from "../../api.js";

import { Swipeable } from "react-swipeable";
import { nextTick } from "q";

class PollSwiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      pollItem: {},
      voteValue: "",
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

    this.setState({ currentUser: currentUser });
  }

  sendVote(voteValue) {
    console.log(voteValue);
    this.setState({ voteValue: voteValue }, () =>  {
      console.log("STATE BEFORE NEXT POLL", this.state);
    swipePoll(this.state).then(response => {
      console.log(response.data);
      this.setState({
        pollItem: response.data,
        voteValue: voteValue
      });
    });
    });
    // const { currentUser } = this.state;
    
    // swipePoll(this.state).then(response => {
    //   this.setState({ pollItem: response.data });
    // });
  }

  render() {
    const { pollItem, currentUser } = this.state;
    return (
      <section className="PollSwiper">
          <NavBar
            currentUser={this.props.currentUser}
            // title="Add Poll"
            logoutConfirmed={user => this.props.logoutConfirmed(user)}
          />
          { !pollItem ? (
            <div className="card bg-secondary">
            <div className="card-header">
              <h1 className="card-title">
              You are out of polls {currentUser.username}
              </h1>
            </div>
            <div className="card-body">

              <h5 className="card-text">
                Please consider logging out or adding new polls!
              </h5>

              <ul className="list-group list-group-flush">
                <li className="list-group-item">Nb Votants</li>
                <li className="list-group-item">Nb Verified</li>
                <li className="list-group-item">Nb Yes</li>
                <li className="list-group-item">Nb No</li>
                <li className="list-group-item">Nb Skip</li>
              </ul>
            </div>
          </div>
          ) : (
            <Swipeable
            pollItem={pollItem}
            onSwipedLeft={() => this.sendVote(1)}
            onSwipedRight={() => this.sendVote(0)}
            onSwipedUp={() => this.sendVote(2)}
          >
            <div className="card bg-secondary">
              <div className="card-header">
                <h1 className="card-title">
                </h1>
              </div>
              <div className="card-body">
  
                <h5 className="card-text">
                  {pollItem.description}
                </h5>
  
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Nb Votants</li>
                  <li className="list-group-item">Nb Verified</li>
                  <li className="list-group-item">Nb Yes</li>
                  <li className="list-group-item">Nb No</li>
                  <li className="list-group-item">Nb Skip</li>
                </ul>
              </div>
            </div>
          </Swipeable>
          )}
          

      </section>
    );
  }
}

export default PollSwiper;
