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
          <div class="card-item">
            <div class="watch-primary-info">
              <img class="image" src={this.state.item.imgPath} />
              <div class="primary-info-text">
                <h1>{this.state.item.title}</h1>
                <p>{this.state.item.description}</p>
                <div class="price-buy">
                  <h1>Price:{this.state.item.price}</h1>
                  <div class="buy-cart">
                    <div>
                      <a href="/">Buy</a>
                    </div>
                    <div>
                      <button onClick={this.addCartHandler}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="watch-secondary-info">
              <h1>More Info</h1>
              <ul class="secondary-info-list">
                <li>Brand: {this.state.item.brand}</li>
                <li>Model: {this.state.item.model}</li>
                <li>Style: {this.state.item.style}</li>
                <li>Movement: {this.state.item.movement}</li>
                <li>Shipping from: {this.state.item.location}</li>
                <li>Seller Name: {this.state.item.username}</li>
              </ul>
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

let Item = connect(mapStatetoProps)(UnconnectedItem);

export default Item;
