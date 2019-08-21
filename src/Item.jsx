import React, { Component } from "react";
import { connect } from "react-redux";
import "./item (version 2).css";

class UnconnectedItem extends Component {
  constructor(props) {
    super(props);
    this.state = { item: undefined };
  }

  componentDidMount = async () => {
    console.log("in Item");
    let body = new FormData();
    body.append("id", this.props.id);
    let response = await fetch("/findItem", { method: "POST", body });
    let responseBody = await response.text();
    let item = JSON.parse(responseBody).item;
    console.log(item);
    this.setState({ item });
  };

  addCartHandler = async () => {
    console.log("in cart handler");
    let data = new FormData();
    data.append("id", this.props.id);
    let response = await fetch("/addCart", { method: "POST", body: data });
    let responseBody = await response.text();
    let body = JSON.parse(responseBody);
    console.log(body);
  };

  render = () => {
    if (this.state.item === undefined) {
      return <div>Loading</div>;
    } else {
      return (
        <div>
          <img class="img center" src="img\watch3.jpg" />

          <h1>{this.state.item.title}</h1>
          <ul>{this.state.item.description}</ul>
          <h1>Price:{this.state.item.price}</h1>
          <h1>More Info</h1>
          <ul>
            <li>Brand: {this.state.item.brand}</li>
            <li>Model: {this.state.item.model}</li>
            <li>Style: {this.state.item.style}</li>
            <li>Movement: {this.state.item.movement}</li>
            <li>Shipping from: {this.state.item.location}</li>
            <li>Seller Name: {this.state.item.username}</li>
            <button type="submit" class="button-add-cart">
              Add to Cart
            </button>
          </ul>
        </div>
      );
    }
  };
}

let mapStatetoProps = state => {
  return { username: state.username };
};

let Item = connect(mapStatetoProps)(UnconnectedItem);

export default Item;
