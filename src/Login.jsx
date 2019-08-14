import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./login.css";

class UnconnectedLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleNameChange = event => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    let data = new FormData();
    data.append("username", this.state.username);
    data.append("password", this.state.password);
    let response = await fetch("/login", {
      method: "POST",
      body: data,
      credentials: "include"
    });
    let responseBody = await response.text();
    let body = JSON.parse(responseBody);
    if (!body.success) {
      console.log("failed");
      return;
    }
    this.props.dispatch({
      type: "login-success"
    });
  };
  render = () => {
    console.log(this.props.loginStatus);
    return (
      <div id="container-login">
        <div className="form-wrap-login">
          <form onSubmit={this.handleSubmit}>
            <h1 className="login-header">Sign in</h1>
            <div className="form-group-login">
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleNameChange}
                placeholder="Username"
                id="user-name"
                required
              />
            </div>
            <div className="form-group-login">
              <input
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                placeholder="Password"
                id="password"
                required
              />
            </div>
            <div className="form-group-login">
              <input type="submit" value="Login" />
            </div>
            <div>
              <a className="create-account-link">
                <Link to={"/signup"}>Create an Account</Link>
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  };
}

let mapStatetoProps = state => {
  return { loginStatus: state.loginStatus };
};

let Login = connect(mapStatetoProps)(UnconnectedLogin);

export default Login;
