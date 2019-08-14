import React, { Component } from "react";
import "./main.css";

class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      srchWatchBrand: "",
      srchWatchImgLoc: undefined,
      srchWatchModelNum: "",
      srchWatchMovementOption: "",
      srchWatchSaleDate: "",
      srchWatchSaleLoc: "",
      srchWatchSalePrice: "",
      srchWatchTypeOption: ""
    };
  }

  handleWatchBrandChange = event => {
    this.setState({...this.state, srchWatchBrand: event.target.value });
  };
  handleWatchModelNumChange = event => {
    this.setState({...this.state, srchWatchModelNum: event.target.value });
  };
  handleWatchMovementChange = event => {
    this.setState({...this.state, srchWatchMovementOption: event.target.value });
  }; // drop-down bar
  handleWatchSaleDateChange = event => {
    this.setState({...this.state, srchWatchSaleDate: event.target.value });
  };
  handleWatchSaleLocChange = event => {
    this.setState({...this.state, srchWatchSaleLoc: event.target.value });
  };
  handleWatchSalePriceChange = event => {
    this.setState({...this.state, srchWatchSalePrice: event.target.value });
  };
  handleWatchTypeChange = event => {
    this.setState({...this.state, srchWatchTypeOption: event.target.value });
  }; // drop-down bar

  handleSubmit = async evt => {
    evt.preventdefault();
    let data = new FormData();
    data.append(srchWatchBrand, this.state.srchWatchBrand);
    data.append(srchWatchImgLoc, this.state.srchWatchImgLoc);
    data.append(srchWatchModelNum, this.state.srchWatchModelNum);
    data.append(srchWatchMovementOption, this.state.srchWatchMovement);
    data.append(srchWatchSaleDate, this.state.srchWatchSaleDate);
    data.append(srchWatchSaleLoc, this.state.srchWatchSaleLoc);
    data.append(srchWatchSalePrice, this.state.srchWatchSalePrice);
    data.append(srchWatchTypeOption, this.state.srchWatchType);
    fetch("/newItem", {
      method: "POST",
      body: data
    });
  };

  render = () => {
    return (
      <div>
        <h2>Refine your search</h2>
        <form id="search" onSubmit={this.handleSubmit} method="POST">
          <div>
            <input
              type="text"
              value={this.state.srchWatchSalePrice}
              onChange={this.handleWatchSalePriceChange}
              placeholder="Price"
            />
          </div>
          <div>
            <input
              type="text"
              value={this.state.srchWatchBrand}
              onChange={this.handleWatchBrandChange}
              placeholder="Brand"
            />
          </div>
          <div>
            <input
              type="text"
              value={this.state.srchWatchSaleLoc}
              onChange={this.handleWatchSaleLocChange}
              placeholder="Location"
            />
          </div>
          <div>
            <input
              type="text"
              value={this.state.srchWatchSaleDate}
              onChange={this.handleWatchSaleDateChange}
              placeholder="DD/MM/YYYY"
            />
          </div>
          <div>
            <input
              type="text"
              value={this.state.srchWatchModelNum}
              onChange={this.handleWatchModelNumChange}
              placeholder="Model #"
            />
          </div>
          <div>
            <label for="input-watchtype">Style Type</label>
            <select id="input-watchtype" tabIndex="2">
              <option value="0">Driver</option>
              <option value="1">Dress</option>
              <option value="2">Field</option>
            </select>
          </div>
          <div>
            <label for="input-watchmovement">Movement Type</label>
            <select id="input-watchmovement" tabIndex="2">
              <option value="0">Quartz</option>
              <option value="1">Automatic</option>
              <option value="2">Manual</option>
            </select>
          </div>
          <div>
            <input type="reset">Clear</input>
          </div>
          <div>
            <input type="submit">Search</input>
          </div>
          <div />
        </form>
      </div>
    );
  };
}

export default NewItem;
