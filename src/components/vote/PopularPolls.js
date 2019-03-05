import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PopularPolls.css";
import NavBar from "../NavBar.js";
import { getPollList } from "../../api.js";

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
    const { currentUser } = this.props;

    return (
      <section className="PopularPolls">
        {/* <header>
          <NavBar
            currentUser={this.props.currentUser}
            logoutConfirmed={() => this.updateUser(null)}
          />
        </header> */}

        <h2>Popular Polls</h2>

        <div className="card-group">
          {pollArray.map(onePoll => {
            return (
              <a
                href={getPollAddress(onePoll)}
                className="card"
                key={onePoll._id}
              >
                <div className="card-header">{onePoll.shortText}</div>
                <div className="card-body">
                  <div className="row">
                    <p className="card-text">{onePoll.longText}</p>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <p className="card-text">Nb Votants</p>
                      <p className="card-text">Nb Verified</p>
                    </div>
                    <div className="col-4">
                      <p className="card-text">Yes</p>
                      <p className="card-text">No</p>
                      <p className="card-text">Skip</p>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>
    );
  }
}

export default PopularPolls;
