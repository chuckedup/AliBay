import React, { Component } from "react";
import { connect } from "react-redux";
import "./Item.css";

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

  render = () => {
    if (this.state.item === undefined) {
      return <div>Loading</div>;
    } else {
      return (
        <div>
          <div id="main-header">
            <div>
              <img id="watch-image" src={this.state.item.imgPath} />
            </div>
            <div>
              <div>
                <h1>{this.state.item.title}</h1>
                <p id="description">{this.state.item.description}</p>
                <div id="priceBuyCart">
                  <div>
                    <h2>Price:{this.state.item.price}</h2>
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
          <div id="info">
            <h2>More Info</h2>
            <ul>
              <li>Brand: {this.state.item.brand}</li>
              <li>Model: {this.state.item.model}</li>
              <li>Style: {this.state.item.style}</li>
              <li>Movement: {this.state.item.movement}</li>
              <li>Shipping from: {this.state.item.location}</li>
              <li>Seller Name: {this.state.item.username}</li>
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

let Item = connect(mapStatetoProps)(UnconnectedItem);

export default Item;
