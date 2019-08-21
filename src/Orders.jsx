import React, { Component } from "react";
import "./orders.css";

class Orders extends Component {
  render() {
    let counter = 0;
    return (
      <div>
        {this.props.items.map(item => {
          counter++;
          return (
            <div>
              <h1>Order History</h1>
              <div class="boxed">
                <h3>Order #xxx</h3>
                <ul>{item[key].description}</ul>
                <ul>item[key].cost}</ul>
                <ul>Amount: {item[key].counter}</ul>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default orders;
