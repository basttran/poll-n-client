import React, { Component } from "react";
import "./AddArgument.css";

class AddArgument extends Component {
  // Component's constructor, remove if not necessary
  constructor(props) {
    super(props);
    // Component's state, remove if not necessary
    this.state = {};
  }
  // Component's method
  componentMethod() {}

  // Component structure and display logic go her
  render() {
    return (
      <section className="AddArgument">
        <h2>AddArgument</h2>
        <form>
          <label>
            <input />
          </label>
          <label>
            <input />
          </label>
        </form>
      </section>
    );
  }
}

export default AddArgument;
