import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./main.css";

class Login extends Component {
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

  handleSubmit = async evt => {
    evt.preventdefault();
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
      alert("Oh Hell Nah");
      return;
    }
    this.props.dispatch({
      type: "login-success"
    });
  };
  render = () => {
    return (
      <div>
        <h2>Log In</h2>
        <form id="login" onSubmit={this.handleSubmit} method="POST">
          <div>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleNameChange}
              placeholder="Username"
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              placeholder="Password"
              required
            />
          </div>
          <div>
            <input className="mySubmitButton" type="submit" />
          </div>
          <div>
            <Link to={"/signup"}>Create an Account</Link>
          </div>
        </form>
      </div>
    );
  };
}
export default Login;
