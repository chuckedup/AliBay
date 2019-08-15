import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedItemTile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    <div />;
  }
}

let ItemTile = connect()(UnconnectedItemTile);

class Item extends Component {
  addCart = () => {
    console.log(this.props.item.id);
    this.props.method(
      this.props.item.id,
      this.props.item.description,
      this.props.item.imageLocation,
      this.props.item.cost
    );
  };
  render() {
    return (
      <div className="card center">
        <div className="left">
          {" "}
          <img height="100px" src={this.props.item.imageLocation} />
        </div>
        <div className="right">
          <div>{this.props.item.description}</div>
          <div>{this.props.item.cost}</div>
          <div>
            <Link to={"/seller/" + this.props.item.sellerId}>
              Link to Seller
            </Link>
          </div>
          <div>
            <Link to={"/details/" + this.props.item.id}>Details</Link>
          </div>
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

export default ItemTile;
