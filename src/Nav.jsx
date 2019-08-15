import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./nav.css";

class UnconnectedNav extends Component {
  logoutHandler = () => {
    this.props.dispatch({ type: "logout" });
    fetch("/logout");
  };

  render() {
    return (
      <div class="topnav">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/allItems">
          All Items
        </Link>
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
    );
  }
}

let mapStateToProps = state => {
  return { loginStatus: state.loginStatus };
};

let Nav = connect(mapStateToProps)(UnconnectedNav);

export default Nav;
