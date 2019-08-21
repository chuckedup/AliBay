import React, { Component } from "react";
import "./Orders.css";

class Orders extends Component {
  render() {
    let counter = 0;
    return (
      <div>
        {this.props.items.map(item => {
          counter++;
          return (
            <div>
              <h1 className="orderNumber">Order #{counter}</h1>
              {Object.keys(item).map((key, index) => {
                console.log(item[key]);
                return (
                  <div className="item">
                    {" "}
                    <div className="leftCart">
                      {" "}
                      <img height="100px" src={item[key].imageLocation} />
                    </div>
                    <div className="rightCart">
                      <div>{item[key].description}</div>
                      <div>{item[key].cost}</div>
                      <div>Amount: {item[key].counter}</div>
                      <div />
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Orders;
