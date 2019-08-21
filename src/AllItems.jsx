import React, { Component } from "react";
import { connect } from "react-redux";
import ItemTile from "./ItemTile.jsx";
import "./app.css";

class UnconnectedAllItems extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], page: 0 };
  }

  nextHandler = () => {
    console.log("next");
    let nextPage = this.state.page + 1;
    if (nextPage * 5 <= this.state.items.length) {
      this.setState({ page: nextPage }, () => this.renderItemsAsLiElems());
    }
  };

  previousHandler = () => {
    console.log("previous");
    let previousPage = this.state.page - 1;
    if (previousPage >= 0) {
      this.setState({ page: previousPage }, () => this.renderItemsAsLiElems());
    }
  };

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

  itemsToDisplay = () => {
    let x = 0 + this.state.page * 5;
    let y = 5 + this.state.page * 5;
    return this.state.items.slice(x, y);
  };

  renderItemsAsLiElems = () => {
    let key = 1;
    return (
      <div className="container">
        {this.itemsToDisplay().map(item => {
          return <ItemTile key={key++} item={item} />;
        })}
      </div>
    );
  };

  render() {
    if (this.state.items.length === 0) {
      return <div>loading...</div>;
    }
    return (
      <div>
        <div>{this.renderItemsAsLiElems()}</div>
        <div>
          <button onClick={this.previousHandler}>Previous</button>
          <button onClick={this.nextHandler}>Next</button>
        </div>
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
