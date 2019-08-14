import React, { Component } from "react";
import "./main.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      password: ""
    };
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };
  handleUsernameChange = event => {
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
    fetch("/signup", {
      method: "POST",
      body: data
    });
  };

  render = () => {
    return (
      <div>
        <form id="signup" onSubmit={this.handleSubmit} method="POST">
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
            placeholder="Name"
            required
          />
          <input
            type="email"
            value={this.state.username}
            onChange={this.handleUsernameChange}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            placeholder="Password"
            required
          />
          <input type="submit" />
        </form>
      </div>
    );
  };
}

export default Signup;
