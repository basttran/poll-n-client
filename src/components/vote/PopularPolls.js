import React, { Component } from "react";
import "./PopularPolls.css";
import NavBar from "../NavBar.js";
import { getPollList } from "../../api.js";
import { Link } from "react-router-dom";

function getPollAddress(poll) {
  return `/poll-details/${poll._id}`;
}

class PopularPolls extends Component {
  constructor(props) {
    super(props);
    this.state = { pollArray: [] };
  }

  componentDidMount() {
    getPollList().then(response => {
      console.log("Polls List", response.data);
      this.setState({ pollArray: response.data });
    });
  }

  render() {
    const { pollArray } = this.state;

    return (
      <section className="PopularPolls">
        <NavBar
          currentUser={this.props.currentUser}
          title="Popular Polls"
          logoutConfirmed={user => this.props.logoutConfirmed(user)}
        />

        <div className="card-group">
          {pollArray.map(onePoll => {
            return (
              <Link
                to={getPollAddress(onePoll)}
                className="card"
                key={onePoll._id}
              >
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
              </Link>
            );
          })}
        </div>
      </section>
    );
  }
}

export default PopularPolls;
