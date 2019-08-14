import React, { Component } from "react";
import "./signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
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
    return (
<<<<<<< HEAD
      <div>
        <h2>Sign Up</h2>
        <form  onSubmit={this.handleSubmit} method="POST">
          <div>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
              placeholder="Name"
              required
            />
          </div>
          <div>
            <input
              type="email"
              value={this.state.username}
              onChange={this.handleUsernameChange}
              placeholder="Email"
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
            <input type="submit" />
          </div>
        </form>
=======
      <div id="container-signup">
        <div className="form-wrap-signup">
          <form onSubmit={this.handleSubmit}>
            <h1 className="login-header">Sign up</h1>
            <div className="form-group-signup">
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleUsernameChange}
                placeholder="Username"
                required
              />
            </div>
            <div className="form-group-signup">
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleEmailChange}
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group-signup">
              <input
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                placeholder="Password"
                required
              />
            </div>
            <input type="submit" value="Sign up" />
          </form>
        </div>
>>>>>>> 907736be31b6d11393500461de6cf743fd80de6e
      </div>
    );
  };
}

export default Signup;
