import React, { Component } from "react";
import { connect } from "react-redux";
import ItemTile from "./ItemTile.jsx";

class UnconnectedAllItems extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }
  componentDidMount = async () => {
    let response = await fetch("/getItems");
    let responseBody = await response.text();
    let items = JSON.parse(responseBody).items;
    console.log(items);
    this.setState({ items });
  };
  render() {
    console.log(this.state.items);
    return (
      <div>
        {this.state.items.map(item => {
          <ItemTile item={item} />;
        })}
      </div>
    );
  }
}

let AllItems = connect()(UnconnectedAllItems);

export default AllItems;
