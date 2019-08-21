import React, { Component } from "react";
import { connect } from "react-redux";
import ItemCart from "./ItemCart.jsx";
import Payment from "./Payment.jsx";
import "./cart.css";

class UnconnectedCart extends Component {
  constructor(props) {
    super(props);
    this.state = { cart: undefined };
  }

  componentDidMount = async () => {
    console.log("in Cart");
    let response = await fetch("/showCart");
    let responseBody = await response.text();
    let body = JSON.parse(responseBody);
    console.log(body);
    let cart = body.item.cart;
    console.log(cart);
    this.setState({ cart });
  };

  updateCart = cart => {
    this.setState({ cart });
  };

  render = () => {
    let total = 0;
    if (this.state.cart === undefined) {
      return <div>You have no items in your cart</div>;
    } else {
      return (
        <div className="cart">
          <div className="cart-title">
            <h1>{this.props.username}'s Cart</h1>
          </div>
          <div className="container-cart">
            {this.state.cart.map(item => {
              total = total + item.price;
              return <ItemCart item={item} updateCart={this.updateCart} />;
            })}
          </div>
          <div className="total-price">
            <span className="total-text">Total</span> {total} CAD
          </div>
          <div class="buy-button">
            <div class="buy-button-child">
              <Payment>Buy</Payment>
            </div>
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
