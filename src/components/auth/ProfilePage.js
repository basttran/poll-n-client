import React, { Component } from "react";
import "./ProfilePage.css";
import { Redirect } from "react-router-dom";
import NavBar from "../NavBar.js";

class ProfilePage extends Component {
  render() {
    const { currentUser, logoutConfirmed } = this.props;
    return !currentUser ? (
      <Redirect to="/" />
    ) : (
      <section className="ProfilePage">
        <NavBar
          currentUser={currentUser}
          title="Profile Page"
          logoutConfirmed={user => logoutConfirmed(user)}
        />
        <div className="user-info">
          <div className="row">
            <div className="col-4">
              <img
                src="https://pngimage.net/wp-content/uploads/2018/06/profile-logo-png-3.png"
                alt={currentUser.username}
              />
            </div>
            <div className="col-8">
              <p>
                Username: <b>{currentUser.username}</b>
              </p>
              {currentUser.isCertified ? (
                <p>Your account is certified</p>
              ) : (
                <p>Insert valid Usercode to get certified</p>
              )}
            </div>
          </div>
          <div className="tag-list">
            <p>List of associated tags :</p>
            <ul>
              {currentUser.tags.map(oneTag => {
                return (
                  <li>
                    <p>
                      <b>{oneTag}</b>
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default ProfilePage;
