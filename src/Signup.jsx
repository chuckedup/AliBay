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

  handleChange = event => {
    let obj = { [event.target.name]: event.target.value };
    this.setState(obj);
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
      this.props.history.push("/login");
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
      confirmPasswordTextColor = {
        color: "red",
        borderColor: "#ff4d4d",
        boxShadow: "0 0 3px #ff4d4d"
      };
    }
    if (
      this.state.confirmPassword === this.state.password &&
      this.state.password.length > 0
    ) {
      confirmPasswordTextColor = {
        color: "green",
        borderColor: "#66cc00",
        boxShadow: "0 0 3px #ccff99"
      };
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
                onChange={this.handleChange}
                placeholder="Username"
                required
              />
            </div>
            <div className="form-group-signup">
              <input
                name="email"
                type="text"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group-signup">
              <input
                style={passwordTextColor}
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="Password"
                required
              />
            </div>
            <div className="form-group-signup">
              <input
                style={confirmPasswordTextColor}
                name="confirmPassword"
                type="password"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="form-group-signup">
              <input type="submit" value="Sign up" />
            </div>
          </form>
          <div className="login-link">
            Have an Account? <Link to={"/login"}>Sign Up</Link>
          </div>
        </div>
      </div>
    );
  };
}

export default Signup;
