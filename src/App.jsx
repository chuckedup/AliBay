import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, BrowserRouter, Link } from "react-router-dom";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import NewItem from "./NewItem.jsx";
import Nav from "./Nav.jsx";

class UnconnectedApp extends Component {
  componentDidMount = async () => {
    console.log("inComponentDidMount");
    let response = await fetch("/checkLogin");
    let responseBody = await response.text();
    let body = JSON.parse(responseBody);
    console.log(body, "body");
    if (body.success) {
      this.props.dispatch({ type: "login-success", username: body.username });
    }
  };

  renderHomepage = () => {
    return (
      <div>
        <Nav />
        <SearchBar />
      </div>
    );
  };

  renderLogin = () => {
    return <Login />;
  };

  renderSignup = () => {
    return <Signup />;
  };

  renderNewItem = () => {
    return <NewItem />;
  };

  renderItem = () => {};

  render = () => {
    return (
      <BrowserRouter>
        <Route exact={true} path="/" component={this.renderHomepage} />
        <Route exact={true} path="/login" component={this.renderLogin} />
        <Route exact={true} path="/signup" component={this.renderSignup} />
        <Route exact={true} path="/newItem" component={this.renderNewItem} />
        <Route exact={true} path="/item/:id" component={this.renderItem} />
      </BrowserRouter>
    );
  };
}

let mapStateToProps = state => {
  return { loginStatus: state.loginStatus };
};

let App = connect(mapStateToProps)(UnconnectedApp);

export default App;
