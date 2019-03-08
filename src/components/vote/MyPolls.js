import React, { Component } from "react";
import "./MyPolls.css";
import NavBar from "../NavBar.js";
import { getPollListCreatedByUser } from "../../api.js";
import { getPollListVotedByUser } from "../../api.js";

class MyPolls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pollCreatedArray: [],
      pollVotedArray: []
    };
  }

  componentDidMount() {
    getPollListCreatedByUser(this.props.currentUser._id).then(response => {
      console.log("Polls Created List", response.data);
      this.setState({ pollCreatedArray: response.data });
    });
    getPollListVotedByUser(this.props.currentUser._id).then(response => {
      console.log("Polls Voted List", response.data);
      this.setState({ pollVotedArray: response.data });
    });
  }

  render() {
    const { pollCreatedArray, pollVotedArray } = this.state;

    return (
      <section className="MyPolls">
        <NavBar
          currentUser={this.props.currentUser}
          title="My Polls"
          logoutConfirmed={user => this.props.logoutConfirmed(user)}
        />
        <p>Polls I've Created</p>
        <div className="card-group">
          {pollCreatedArray.map(onePoll => {
            return (
              <div className="card" key={onePoll._id}>
                <div className="card-header">
                  <h5>{onePoll.title}</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <h6 className="card-text">{onePoll.description}</h6>
                  </div>
                  <div className="row">
                    <p className="card-text">Nb Votants</p>
                    <p className="card-text">Nb Verified</p>
                    <p className="card-text">Yes</p>
                    <p className="card-text">No</p>
                    <p className="card-text">Skip</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p>Polls I've Voted</p>
        <div className="card-group">
          {pollVotedArray.map(onePoll => {
            return (
              <div className="card" key={onePoll._id}>
                <div className="card-header">
                  <h5>{onePoll.title}</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <h6 className="card-text">{onePoll.description}</h6>
                  </div>
                  <div className="row">
                    <p className="card-text">Nb Votants</p>
                    <p className="card-text">Nb Verified</p>
                    <p className="card-text">Yes</p>
                    <p className="card-text">No</p>
                    <p className="card-text">Skip</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default MyPolls;
