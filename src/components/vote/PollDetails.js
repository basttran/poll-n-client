import React, { Component } from "react";
import "./PollDetails.css";
import { votePoll } from "../../api.js";
import { Redirect } from "react-router-dom";

class PollDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voteValue: "",
      noPollsAvailable: false
    };
  }

  sendVote(voteValue) {
    const { currentUser, pollItem, reloadPollDetails } = this.props;
    this.setState({ voteValue });
    let voteSubmission = { currentUser, pollItem, voteValue };
    votePoll(voteSubmission).then(() =>
      reloadPollDetails().then(response => {
        if (response.data === "NO POLLS AVAILABLE") {
          console.log("No Poll Available, will redirect to My Polls now.");
          this.setState({ noPollsAvailable: true });
        }
        console.log("Reloaded Poll Details", response.data);
      })
    );
  }

  render() {
    const { pollItem } = this.props;
    const { noPollsAvailable } = this.state;
    return noPollsAvailable ? (
      <Redirect
        to="my-polls"
        errormsg="No more polls available at the moment. Feel free to add more."
      />
    ) : (
      <section className="PollDetails">
        <div className="card bg-secondary">
          <div className="card-header">
            <h1 className="card-title">{pollItem.title}</h1>
          </div>
          <div className="card-body">
            <h5 className="card-subtitle mb-2 text-muted">
              {pollItem.createdAt}
            </h5>
            <h5 className="card-text">{pollItem.description}</h5>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">Nb Votants</li>
              <li className="list-group-item">Nb Verified</li>
              <li className="list-group-item">Nb Yes</li>
              <li className="list-group-item">Nb No</li>
              <li className="list-group-item">Nb Skip</li>
            </ul>
            <div className="arrow-line">
              <button onClick={() => this.sendVote(1)}>
                <h5>
                  <i className="fa fa-arrow-left" />
                  YES
                </h5>
              </button>

              <button onClick={() => this.sendVote(2)}>
                <h5>
                  <i className="fa fa-reply-all" />
                  SKIP
                </h5>
              </button>

              <button onClick={() => this.sendVote(0)}>
                <h5>
                  NO
                  <i className="fa fa-arrow-right" />
                </h5>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PollDetails;
