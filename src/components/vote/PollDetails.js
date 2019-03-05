import React, { Component } from "react";
import "./PollDetails.css";
import { Link } from "react-router-dom";
import ReactSwipe from "react-swipe";

class PollDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { pollItem } = this.props;
    return (
      <section className="PollDetails">
        <div className="card bg-secondary">
          <div className="card-header">
            <h5 className="card-title">{pollItem.title}</h5>
          </div>
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">
              {pollItem.createdAt}
            </h6>
            <p className="card-text">{pollItem.description}</p>
            <h3>
              YES
              <i className="fa fa-arrow-left">YES</i>
            </h3>
            <h3>
              <i className="fa fa-spinner fa-spin">NO</i>
            </h3>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">Nb Votants</li>
              <li className="list-group-item">Nb Verified</li>
              <li className="list-group-item">Nb Yes</li>
              <li className="list-group-item">Nb No</li>
              <li className="list-group-item">Nb Skip</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default PollDetails;
