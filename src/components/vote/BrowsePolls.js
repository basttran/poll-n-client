import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BrowsePolls.css";
import { getPollList } from "../../api.js";

function getPollAddress(poll) {
  return `/poll-details/${poll._id}`;
}

class BrowsePolls extends Component {
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
      <section className="BrowsePolls">
        <div className="card-group">
          {pollArray.map(onePoll => {
            return (
              <div className="card" key={onePoll._id}>
                <img
                  className="card-img-top"
                  src={onePoll.image}
                  alt={onePoll.shortText}
                />
                <div className="card-body">
                  <h5 className="card-title">{onePoll.shortText}</h5>
                  <p className="card-text">{onePoll.longText}</p>
                </div>
                <div className="row">
                  <div className="col-4">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Pro #1</li>
                      <li className="list-group-item">Pro #1</li>
                      <li className="list-group-item">Pro #1</li>
                    </ul>
                  </div>
                  <div className="col-4" />
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Con #1</li>
                    <li className="list-group-item">Con #2</li>
                    <li className="list-group-item">Con #3</li>
                  </ul>
                </div>

                <div className="card-body">
                  <Link className="card-link" to={getPollAddress(onePoll)}>
                    Poll Details
                  </Link>
                  <Link className="card-link" to="/add-argument">
                    Add Argument
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default BrowsePolls;
