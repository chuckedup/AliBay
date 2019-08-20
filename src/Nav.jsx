import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./nav.css";
import SearchBar from "./SearchBar.jsx";

class UnconnectedNav extends Component {
  logoutHandler = () => {
    this.props.dispatch({ type: "logout" });
    fetch("/logout");
  };

  render() {
    return (
      <div class="topnav">
        <div className="left-nav">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/allItems">
            All Items
          </Link>
        </div>
        <div className="center-nav">
          {this.props.allItems ? <SearchBar /> : <span />}
        </div>
        <div className="right-nav">
          {this.props.loginStatus ? (
            <div style={{ float: "right" }}>
              <Link className="nav-link" to="/newItem">
                Sell Item
              </Link>
              <button onClick={this.logoutHandler}>
                <span>
                  Logout
                  {/*<i class="fas fa-sign-out-alt" /> */}
                </span>
              </button>
            </div>
          ) : (
            <Link className="nav-link" to="/login">
              Sign in
            </Link>
          )}
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return { loginStatus: state.loginStatus };
};

let Nav = connect(mapStateToProps)(UnconnectedNav);

export default Nav;
