import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, BrowserRouter, Link } from "react-router-dom";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import NewItem from "./NewItem.jsx";
import Nav from "./Nav.jsx";
import SearchBar from "./SearchBar.jsx";
import AllItems from "./AllItems.jsx";
import Item from "./Item.jsx";
import SearchFilter from "./SearchFilter.jsx";
import "./app.css";

class UnconnectedApp extends Component {
  componentDidMount = async () => {
    console.log("inComponentDidMount");
    let response = await fetch("/checkLogin");
    let responseBody = await response.text();
    let body = JSON.parse(responseBody);
    if (body.success) {
      this.props.dispatch({ type: "login-success", username: body.username });
    }
  };

  renderHomepage = () => {
    return (
      <div>
        <Nav allItems={false} />
        <SearchBar history={this.props.history} />
      </div>
    );
  };

  renderItem = routerData => {
    console.log("in renderItem ");
    let itemId = routerData.match.params.id;
    return (
      <div>
        <Nav allItems={true} />
        <Item id={itemId} />
      </div>
    );
  };

  renderLogin = props => {
    return <Login history={props.history} />;
  };

  renderSignup = () => {
    return <Signup history={this.props.history} />;
  };

  renderNewItem = () => {
    return <NewItem />;
  };

  renderAllItems = () => {
    return (
      <div>
        <Nav allItems={true} />
        <div className="search-container">
          <div className="allitems">
            <SearchFilter history={this.props.history} />
            <AllItems />
          </div>
        </div>
      </div>
    );
  };

  render = () => {
    return (
      <BrowserRouter>
        <Route exact={true} path="/" component={this.renderHomepage} />
        <Route exact={true} path="/login" component={this.renderLogin} />
        <Route exact={true} path="/signup" component={this.renderSignup} />
        <Route exact={true} path="/newItem" component={this.renderNewItem} />
        <Route exact={true} path="/item/:id" component={this.renderItem} />
        <Route exact={true} path="/allItems" component={this.renderAllItems} />
      </BrowserRouter>
    );
  };
}

let mapStateToProps = state => {
  return { loginStatus: state.loginStatus };
};

let App = connect(mapStateToProps)(UnconnectedApp);

export default App;
