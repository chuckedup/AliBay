import React, { Component } from "react";
import { connect } from "react-redux";
import "./Cart.css";

class UnconnectedCart extends Component {
  constructor(props) {
    super(props);
    this.state = { cart: undefined };
  }

  componentDidMount = async () => {
    console.log("in Cart");
    let body = new FormData();
    body.append("id", this.props.id);
    let response = await fetch("/findcart", { method: "POST", body });
    let responseBody = await response.text();
    let cart = JSON.parse(responseBody).cart;
    console.log(cart);
    this.setState({ cart });
  };

  render = () => {
    if (this.state.cart === undefined) {
      return <h2>You have no items in your cart</h2>;
    } else {
      return (
        <div>
          <div id="cart-header">
            <div>
              <h3>SHOPPING CART</h3>
            </div>
            <div>
              <div>
                <h1>{this.state.item.title}</h1>
                <p id="description">{this.state.item.description}</p>
                <div id="priceBuyCart">
                  <div>
                    <h2>Item in carts:{this.state.item.carts}</h2>
                  </div>
                  <div>
                    <a href="/">Buy</a>
                  </div>
                  <div>
                    <a href="/">Add to Cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="cart">
            <h2>Shopping Cart</h2>
            <ul>
              <li>Qty: {this.state.item.qty}</li>
              <li>Description: {this.state.item.description}</li>
              <li>Price: {this.state.item.price}</li>
            </ul>
          </div>
        </div>
      );
    }
  };
}

let mapStatetoProps = state => {
  return { username: state.username };
};

let Cart = connect(mapStatetoProps)(UnconnectedCart);

export default Cart;
