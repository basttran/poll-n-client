import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "./ProfilePage.css";

class ProfilePage extends Component {
  render() {
    const { currentUser } = this.props;
    console.log("COUCOU", currentUser);
    return !currentUser ? (
      <Redirect to="/" />
    ) : (
      <section className="ProfilePage">
        <h2>{currentUser.username}</h2>
        {/* {currentUser.isVerified ? (
          <p>Your account is verified</p>
        ) : (
          <a href="/">Obtain a verified account</a> // change the link
        )} */}
        <img
          src="https://pngimage.net/wp-content/uploads/2018/06/profile-logo-png-3.png"
          alt={currentUser.username}
        />
        <ul>
          {currentUser.tags.map(oneTag => {
            return <li>{oneTag}</li>;
          })}
        </ul>
      </section>
    );
  }
}

export default ProfilePage;
