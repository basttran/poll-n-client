import React, { Component } from "react";

import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <section className="HomePage">
        <p>Welcome to Poll-N!</p>

        {/* <canvas id="canvas" />

        <div id="interface">
          Message:
          <input
            id="message"
            type="text"
            value="poll^(n)"
            onchange="change()"
          />
          Gravity:
          <input
            onchange="changeV()"
            type="range"
            id="2"
            value="0"
            max="1"
            min="-1"
            step="0.1"
          />
          Duration:
          <input
            onchange="changeV()"
            type="range"
            id="3"
            value=".4"
            max="0.99"
            min="0.1"
            step="0.01"
          />
          Speed:
          <input
            onchange="changeV()"
            type="range"
            id="5"
            value=".1"
            max="5"
            min="0"
            step="0.01"
          />
          Radius:
          <input
            onchange="changeV()"
            type="range"
            id="6"
            value="2"
            max="20"
            min="1.8"
            step="0.1"
          />
          Resolution:
          <input
            type="range"
            id="4"
            value="5"
            max="20"
            min="3"
            step="1"
            onchange="change()"
          />
        </div> */}
      </section>
    );
  }
}

export default HomePage;
