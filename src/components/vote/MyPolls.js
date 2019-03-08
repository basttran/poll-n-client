import React, { Component } from "react";
import "./MyPolls.css";
import NavBar from "../NavBar.js";
import { getPollListCreatedByUser } from "../../api.js";
import { getPollListVotedByUser } from "../../api.js";

import { getNbYes } from "../../api.js";

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

        {this.props.errormsg ? (
          <div>
            <h4>{this.props.errormsg}</h4>
          </div>
        ) : (
          <div />
        )}

        <p>Polls I've Created</p>
        <div className="card-group">
          {pollCreatedArray.map(onePoll => {
            return (
              <div className="card" key={onePoll._id}>
                <div className="card-header">
                  <h5>{onePoll.title}</h5>
                </div>
                <div className="card-body">
                  <div>
                    <h6 className="card-text">{onePoll.description}</h6>
                  </div>
                  <ul>
                    <li className="card-text">
                      <b>{onePoll.votes.length}</b> Voters
                    </li>
                    <li className="card-text">
                      <b>0</b> Verified
                    </li>
                    <li className="card-text">Yes</li>
                    <li className="card-text">No</li>
                    <li className="card-text">Skip</li>
                  </ul>
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
                  <div>
                    <h6 className="card-text">{onePoll.description}</h6>
                  </div>
                  <ul>
                    <li className="card-text">
                      <b>{onePoll.votes.length}</b> Voters
                    </li>
                    <li className="card-text">
                      <b>0</b> Verified
                    </li>
                    {/* <li className="card-text">{getNbYes(onePoll._id)} Yes</li> */}
                    <li className="card-text">No</li>
                    <li className="card-text">Skip</li>
                  </ul>
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
