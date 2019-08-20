import React, { Component } from "react";
import { connect } from "react-redux";
import ItemTile from "./ItemTile.jsx";
import "./app.css";

class UnconnectedAllItems extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }
  componentDidMount = async () => {
    let response = await fetch("/getItems");
    let responseBody = await response.text();
    let data = JSON.parse(responseBody).items;
    console.log(data);
    let items = data.filter(item => {
      let title = item.title.toLowerCase();
      return title.includes(this.props.query.toLowerCase());
    });
    this.setState({ items });
  };
  render() {
    console.log(this.state.items);
    return (
      <div className="container">
        {this.state.items.map(item => {
          return <ItemTile item={item} />;
        })}
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    query: state.search.query,
    min: state.search.min,
    max: state.search.max,
    brand: state.search.brand,
    style: state.search.style,
    movement: state.search.movement
  };
};

let AllItems = connect(mapStateToProps)(UnconnectedAllItems);

export default AllItems;
