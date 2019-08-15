import React, { Component } from "react";
import { connect } from "react-redux";
import "./item.css";

class UnconnectedItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    return (
      <div>
        <div id="1">
          <img id="1.1" src={this.props.item.imgPath} />
          <div id="1.2">
            {/* <h2 id="1.2.1">{this.props.items.title}</h2> ------ NOT YET IMPLEMENTED ------ */}
            <h3 id="watchDescription">{this.props.item.description}</h3>
            <h2 id="watchPrice">{this.props.item.price}</h2>
          </div>
        </div>
        <div id="2">
          <h3 id="shippingLocation">{this.props.item.country}</h3>
          <h3 id="seller">{this.props.item.username}</h3>
          {/* <h3 id="postDate">{this.props.items.date}</h3> ------ NOT YET IMPLEMENTED ------ */}
        </div>
        <div id="3">
          <h2 id="3.1">More Info</h2>
          <ul id="3.2">
            <li id="watchBrand">{this.props.item.brand}</li>
            <li id="watchModel">{this.props.item.model}</li>
            <li id="watchStyle">{this.props.item.style}</li>
            <li id="watchMovement">{this.props.item.movement}</li>
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
