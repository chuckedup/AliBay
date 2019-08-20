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
    let data = new FormData();
    console.log(this.props.brand);
    data.append("brand", this.props.brand);
    data.append("movement", this.props.movement);
    data.append("style", this.props.style);
    let response = await fetch("/getItems", { method: "POST", body: data });
    let responseBody = await response.text();
    let body = JSON.parse(responseBody).items;
    let items = body.filter(item => {
      let title = item.title.toLowerCase();
      return title.includes(this.props.query.toLowerCase());
    });
    this.setState({ items });
  };

  componentDidUpdate = async () => {
    let data = new FormData();
    console.log(this.props.brand);
    data.append("brand", this.props.brand);
    data.append("movement", this.props.movement);
    data.append("style", this.props.style);
    let response = await fetch("/getItems", { method: "POST", body: data });
    let responseBody = await response.text();
    let body = JSON.parse(responseBody).items;
    let items = body.filter(item => {
      let title = item.title.toLowerCase();
      return title.includes(this.props.query.toLowerCase());
    });
    this.setState({ items });
  };

  render() {
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
