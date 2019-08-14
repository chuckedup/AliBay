import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleUsernameChange = event => {
    this.setState({ username: event.target.value });
  };
  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };
  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };
  handleConfirmPasswordChange = event => {
    this.setState({ confirmPassword: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    let data = new FormData();
    data.append("username", this.state.username);
    data.append("email", this.state.email);
    data.append("password", this.state.password);
    let response = await fetch("/signup", {
      method: "POST",
      credentials: "include",
      body: data
    });
    let responseBody = await response.text();
    let body = JSON.parse(responseBody);
    if (body.success) {
      alert("success");
    } else {
      alert("failed");
    }
  };

  render = () => {
    let passwordTextColor = { color: "black" };
    let confirmPasswordTextColor = {
      color: "black"
    };
    if (
      this.state.confirmPassword !== this.state.password &&
      this.state.password.length > 0
    ) {
      confirmPasswordTextColor = { color: "red", outline: "red 1px solid" };
    }
    if (
      this.state.confirmPassword === this.state.password &&
      this.state.password.length > 0
    ) {
      confirmPasswordTextColor = { color: "green", outline: "green 1px solid" };
    }
    if (
      this.state.confirmPassword === this.state.password &&
      this.state.password === ""
    ) {
      confirmPasswordTextColor = {};
    }
    if (
      this.state.confirmPassword.length === 0 &&
      this.state.password.length > 0
    ) {
      confirmPasswordTextColor = {};
    }
    return (
      <div id="container-signup">
        <div className="form-wrap-signup">
          <form onSubmit={this.handleSubmit}>
            <h1 className="signup-header">Sign up</h1>
            <div className="form-group-signup">
              <input
                name="username"
                type="text"
                value={this.state.username}
                onChange={this.handleUsernameChange}
                placeholder="Username"
                required
              />
            </div>
            <div className="form-group-signup">
              <input
                name="email"
                type="text"
                value={this.state.email}
                onChange={this.handleEmailChange}
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group-signup">
              <input
                style={passwordTextColor}
                name="pwd"
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                placeholder="Password"
                required
              />
            </div>
            <div className="form-group-signup">
              <input
                style={confirmPasswordTextColor}
                name="cPwd"
                type="password"
                value={this.state.confirmPassword}
                onChange={this.handleConfirmPasswordChange}
                placeholder="Confirm Password"
                required
              />
            </div>
            <input type="submit" value="Sign up" />
          </form>
        </div>
      </div>
    );
  };
}

export default Signup;
