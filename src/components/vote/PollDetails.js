import React, { Component } from "react";
import "./PollDetails.css";
import { votePoll } from "../../api.js";
import { getNextPoll } from "../../api.js";

class PollDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      pollItem: {},
      voteValue: ""
    };
  }

  componentDidMount() {
    const { currentUser, pollItem } = this.props;
    this.setState({ currentUser, pollItem });
  }

  sendVote(voteValue) {
    this.setState({ voteValue: voteValue });
    votePoll(this.state).then(
      getNextPoll(this.state.currentUser._id).then(response => {
        console.log("Next Poll", response.data);
        this.setState({ pollItem: response.data });
      })
    );
  }

  render() {
    const { pollItem } = this.props;
    return (
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
              {/* <Link className="vote-link" to={sendVote(1)}> */}
              <button onClick={() => this.sendVote(1)}>
                <h5>
                  <i className="fa fa-arrow-left" />
                  YES
                </h5>
              </button>
              {/* </Link> */}

              {/* <Link className="vote-link" to="skip-route"> */}
              <button onClick={() => this.sendVote(2)}>
                <h5>
                  <i className="fa fa-reply-all" />
                  SKIP
                </h5>
              </button>
              {/* </Link> */}

              {/* <Link className="vote-link" to="skip-route"> */}
              <button onClick={() => this.sendVote(0)}>
                <h5>
                  NO
                  <i className="fa fa-arrow-right" />
                </h5>
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PollDetails;
