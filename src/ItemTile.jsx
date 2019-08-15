import React, { Component } from "react";
import { connect } from "react-redux";
import "./itemTile.css";

class UnconnectedItemTile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addCart = () => {
    console.log(this.props.item);
  };

  render() {
    return (
      <div className="card center">
        <div className="left">
          <div className="image">
            <img height="200px" src={this.props.item.imgPath} />
          </div>
        </div>
        <div className="right">
          <div>
            {this.props.item.brand} {this.props.item.model}
          </div>
          <div className="price">C ${this.props.item.price}</div>
          <div>
            <button onClick={this.addCart} className="cartButton">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

let ItemTile = connect()(UnconnectedItemTile);

export default ItemTile;
