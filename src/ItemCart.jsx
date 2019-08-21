import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./itemCart.css";

class UnconnectedItemCart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addCart = () => {
    console.log(this.props.item);
  };

  render() {
    return (
      <div className="center-cart">
        <div className="left">
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
          <div className="price">C ${this.props.item.price} </div>
        </div>
      </div>
    );
  }
}

let ItemCart = connect()(UnconnectedItemCart);

export default ItemCart;
