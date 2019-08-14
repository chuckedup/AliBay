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
    this.setState({ confirmpassword: event.target.value });
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
    let passwordTextColor = { color: "green" }
    if (this.state.password !== this.state.confirmPassword) {
      passwordTextColor = { color: "red"}
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
<<<<<<< HEAD
              <input
                style={passwordTextColor}
                name="cPwd"
                type="password"
                value={this.state.confirmPassword}
                onChange={this.handleConfirmPasswordChange}
                placeholder="Confirm Password"
                required
              />
            </div>
            <input type="submit" value="Sign up" />
=======
              <input type="submit" value="Sign up" />
            </div>
            <div>
              <a className="login-link">
                Have an Account? <Link to={"/Login"}>Sign in</Link>
              </a>
            </div>
>>>>>>> 3199fa8b608e4c3079c0b1787272ea6010e37998
          </form>
        </div>
      </div>
    );
  };
}

export default Signup;
