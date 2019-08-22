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
import Cart from "./Cart.jsx";
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
      <div className="homepage">
        <Nav allItems={false} />
        <img src="img\logos\logoBack.png" />
        <img src="img\logos\LogoFront.png" />
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

  renderSignup = props => {
    return <Signup history={props.history} />;
  };

  renderNewItem = props => {
    return (
      <div>
        <Nav allItems={true} />
        <NewItem history={props.history} />
      </div>
    );
  };

  renderAllItems = () => {
    return (
      <div className="allItem-render">
        <Nav allItems={true} />
        <div className="search-and-items">
          <div className="search-container">
            <SearchFilter history={this.props.history} />
          </div>
          <div className="allitems">
            <AllItems />
          </div>
        </div>
      </div>
    );
  };

  renderCart = () => {
    return (
      <div>
        <Nav allItems={true} />
        <Cart />
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
        <Route exact={true} path="/cart" component={this.renderCart} />
      </BrowserRouter>
    );
  };
}

let mapStateToProps = state => {
  return { loginStatus: state.loginStatus };
};

let App = connect(mapStateToProps)(UnconnectedApp);

export default App;
