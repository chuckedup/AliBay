import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./itemCart.css";

class UnconnectedItemCart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleteCartHandler = async event => {
    console.log("delete pressedn");
    event.preventDefault();
    let data = new FormData();
    data.append("id", this.props.item.id);
    let response = await fetch("/deleteCart", {
      method: "POST",
      body: data,
      credentials: "include"
    });
    let responseBody = await response.text();
    let body = JSON.parse(responseBody);
    if (body.success) {
      console.log("true");
      let res = await fetch("/showCart");
      let resBody = await res.text();
      let bod = JSON.parse(resBody);
      let cart = bod.item.cart;
      this.props.updateCart(cart);
    }
  };

  render() {
    return (
      <div className="center-cart">
        <div className="left">
          <div className="close">
            <button onClick={this.deleteCartHandler}>
              <i class="fas fa-times" />
            </button>
          </div>
          <div className="image">
            <img height="175px" src={this.props.item.imgPath} />
          </div>
        </div>
        <div className="right-itemcard">
          <div className="">
            <Link to={"/item/" + this.props.item.id}>
              {this.props.item.title}
            </Link>
            <div>
              {this.props.item.brand} {this.props.item.model}
            </div>
          </div>
          <div className="price">C ${this.props.item.price}.95 </div>
        </div>
      </div>
    );
  }
}

let ItemCart = connect()(UnconnectedItemCart);

export default ItemCart;
