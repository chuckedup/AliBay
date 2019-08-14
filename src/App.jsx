import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, BrowserRouter, Link } from "react-router-dom";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import NewItem from "./NewItem.jsx";

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
    let newItem = <div />;
    if (this.props.loginStatus) {
      newItem = (
        <div>
          <Link to="/newItem">New Post</Link>
        </div>
      );
    }
    return (
      <div>
        <Link to="/login">Login</Link>
        {newItem}
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

  render = () => {
    return (
      <BrowserRouter>
        <Route exact={true} path="/" component={this.renderHomepage} />
        <Route exact={true} path="/login" component={this.renderLogin} />
        <Route exact={true} path="/signup" component={this.renderSignup} />
        <Route exact={true} path="/newItem" component={this.renderNewItem} />
        <Route exact={true} path="/item/:id" component={this.renderItemPage} />
      </BrowserRouter>
    );
  };
}

let mapStateToProps = state => {
  return { loginStatus: state.loginStatus };
};

let App = connect(mapStateToProps)(UnconnectedApp);

export default App;
