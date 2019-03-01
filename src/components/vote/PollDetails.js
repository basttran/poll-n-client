import React, { Component } from "react";
import "./PollDetails.css";
import { Link, Route, Switch } from "react-router-dom";

import { getPollDetails } from "../../api.js";
// import { getArgumentList } from "../../api.js";
import AddArgument from "./AddArgument.js";

function postPollAddress(poll) {
  return `/polls/${poll._id}/add-argument`;
}

class PollDetails extends Component {
  // Component's constructor, remove if not necessary
  constructor(props) {
    super(props);
    // Component's state, remove if not necessary
    this.state = {
      pollItem: {}
    };
  }
  // Component's method
  componentDidMount() {
    // get path params from React router props
    const { params } = this.props.match;
    // use the ID in path params to get the details from the backend API
    getPollDetails(params.pollId).then(response => {
      console.log("Poll Details", response.data);
      this.setState({ pollItem: response.data });
    });
    // getArgumentList().then(response => {
    //   console.log("Argument List", response.data);
    //   this.setState({ argumentArray: response.data });
    // });
  }

  // Component structure and display logic go her
  render() {
    const { pollItem } = this.state;
    return (
      <section className="PollDetails">
        <h2>PollDetails</h2>
        <h3>{pollItem.shortText}</h3>
        <p>{pollItem.longText}</p>
        <img src={pollItem.image} alt={pollItem.shortText} />
        <Link className="addButton" to={postPollAddress(pollItem)}>
          Submit a new Argument
        </Link>
        {/* <Switch> */}
        {/* </Switch> */}
        {/* <Switch>
          <Route
            path="/add-argument"
            render={() => {
              return <AddArgument pollId={pollItem._id} />;
            }}
          />
        </Switch> */}
      </section>
    );
  }
}

export default PollDetails;
