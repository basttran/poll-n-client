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
              <h5>
                <i className="fa fa-arrow-left" />
                YES
              </h5>
              <h5>
                <i className="fa fa-arrow-up" />
                SKIP
              </h5>
              <h5>
                NO
                <i className="fa fa-arrow-right" />
              </h5>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PollDetails;
