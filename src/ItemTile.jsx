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

export default ItemTile;
