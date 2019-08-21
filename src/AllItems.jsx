import React, { Component } from "react";
import { connect } from "react-redux";
import ItemTile from "./ItemTile.jsx";
import "./allItems.css";

class UnconnectedAllItems extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], page: 0 };
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

  nextHandler = () => {
    console.log("next");
    let nextPage = this.state.page + 1;
    if (nextPage * 5 < this.state.items.length) {
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

  itemsToDisplay = () => {
    let x = 0 + this.state.page * 5;
    let y = 5 + this.state.page * 5;
    return this.state.items.slice(x, y);
  };

  pageButtonHandler = page => {
    this.setState({ page }, () => {
      this.renderItemsAsLiElems();
    });
  };

  renderPageNumbers = () => {
    let numberOfPages = Math.ceil(this.state.items.length / 5);
    let pageArray = [];
    for (let p = 0; p < numberOfPages; p++) {
      pageArray.push(p);
    }
    return (
      <div>
        {pageArray.map(p => {
          return (
            <button onClick={() => this.pageButtonHandler(p)}>{p + 1}</button>
          );
        })}
      </div>
    );
  };

  renderItemsAsLiElems = () => {
    return (
      <div>
        {this.itemsToDisplay().map(item => {
          return <ItemTile item={item} />;
        })}
      </div>
    );
  };

  render() {
    if (this.state.items.length === 0) {
      return <div>loading...</div>;
    }
    return (
      <div className="container">
        <div>{this.renderItemsAsLiElems()}</div>
        <div className="allItem-page-buttons  pg-ctrls">
          <div className="previous-page">
            <button onClick={this.previousHandler}>
              <i class="fas fa-arrow-left" />
            </button>
          </div>
          <div className="pageNumbers">{this.renderPageNumbers()}</div>
          <button onClick={this.nextHandler}>
            <i class="fas fa-arrow-right" />
          </button>
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
