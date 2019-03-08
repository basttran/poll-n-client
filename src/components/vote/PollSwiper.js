import React, { Component } from "react";
import "./PollSwiper.css";
import { votePoll } from "../../api.js";
import { getNewPoll } from "../../api.js";
import { Swipeable } from "react-swipeable";

class PollSwiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      pollItem: {},
      voteValue: ""
    };
  }

  componentDidMount() {

  }

  sendVote(voteValue) {
    this.setState({ "voteValue": voteValue });
    console.log(voteValue);
    console.log(this.state);

      // .then(
      //   getNewPoll(currentUser).then(response => {
      //     console.log("New Poll", response.data);
      //     this.setState({ pollItem: response.data });
      //   })
      // );
    
    // votePoll(this.state).then(
    //   getNextPoll(this.state.currentUser._id).then(response => {
    //     console.log("Next Poll", response.data);
    //     this.setState({ pollItem: response.data });
    //   })
    // );
  }

  render() {
    const { pollItem } = this.state;
    return (
        <section className="PollSwiper">
        <span>{pollItem.title}</span>
              <Swipeable
        pollItem={this.state.pollItem}
        onSwipedLeft={() => this.sendVote(1)}
        onSwipedRight={() => this.sendVote(0)}
        onSwipedUp={() => this.sendVote(2)}
        // { preventDefaultTouchmoveEvent: true }
      >
          <div className="card bg-secondary">
            <div className="card-header" >
              <h1 className="card-title">{pollItem ? (<span>{pollItem.shortText}</span>) : (<p></p>) }</h1>
            </div>
            <div className="card-body">
              {/* <h5 className="card-subtitle mb-2 text-muted">
                {pollItem.createdAt}
              </h5> */}
              <h5 className="card-text">{pollItem ? (<span>{pollItem.longText}</span>) : (<p></p>) }</h5>

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
        </section>
    );
  }
}

export default PollSwiper;
