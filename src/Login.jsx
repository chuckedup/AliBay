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
        <form
          className="sellerForm cardForm container"
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleNameChange}
            placeholder="Username"
          />
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            placeholder="Password"
          />
          <input className="mySubmitButton" type="submit" />
          <div>
            <Link to={"/signup"}>Create an Account</Link>
          </div>
        </form>
      </div>
    );
  };
}
export default Login;
