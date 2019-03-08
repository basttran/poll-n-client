import React, { Component } from "react";
import "./PopularPolls.css";
import NavBar from "../NavBar.js";
import { getPollList } from "../../api.js";

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
            //onePoll.votes. ==>  nb of YES

            return (
              <div className="card" key={onePoll._id}>
                <div className="card-header">
                  <h5>{onePoll.title}</h5>
                </div>
                <div className="card-body">
                  <div>
                    <p className="card-text">{onePoll.description}</p>
                  </div>
                  <div>
                    <ul>
                      <li className="card-text">
                        {onePoll.votes.length} Voters
                      </li>
                      <li className="card-text">Nb Verified</li>
                      <li className="card-text">Yes</li>
                      <li className="card-text">No</li>
                      <li className="card-text">Skip</li>
                    </ul>
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

export default PopularPolls;
