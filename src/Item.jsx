import React, { Component } from "react";
import { connect } from "react-redux";
import "./Item.css";

class UnconnectedItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
// Not sure what is required over here ^^  
  render = () => {
    return (
      <div>
        <div id="main-header">
          <div>
            <img id="watch-image" src={this.props.item.imgPath} />
          </div>
          <div>
            <div>
              <h1>{this.props.item.title}</h1>
              <p id="description">{this.props.item.description}</p>
              <div id="priceBuyCart">
                <div>
                  <h2>Price:{this.props.item.price}</h2>
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
            <li>Brand: {this.props.item.brand}</li>
            <li>Model: {this.props.item.model}</li>
            <li>Style: {this.props.item.style}</li>
            <li>Movement: {this.props.item.movement}</li>
            <li>Shipping from: {this.props.item.location}</li>
            <li>Seller Name: {this.props.item.username}</li>
          </ul>
        </div>
      </div>
    );
  };
}

let mapStatetoProps = state => {
  return { username: state.username };
};

let Item = connect(mapStatetoProps)(UnconnectedItem);

export default Item;
