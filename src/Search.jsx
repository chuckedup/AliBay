import React, { Component } from "react";
import "./main.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      srchWatchBrand: "",
      srchWatchImgLoc: undefined,
      srchWatchModelNum: "",
      srchWatchMovementOption: "",
      srchWatchSaleDate: "",
      srchWatchSaleLoc: "",
      srchWatchSalePrice: undefined,
      srchWatchTypeOption: ""
    };
  }

  handleWatchBrandChange = event => {
    this.setState({ srchWatchBrand: event.target.value });
  };
  handleWatchImgLocChange = event => {
    this.setState({ srchWatchImgLoc: event.target.value });
  }; // a file ?
  handleWatchModelNumChange = event => {
    this.setState({ srchWatchModelNum: event.target.value });
  };
  handleWatchMovementChange = event => {
    this.setState({ srchWatchMovementOption: event.target.value });
  }; // drop-down bar
  handleWatchSaleDateChange = event => {
    this.setState({ srchWatchSaleDate: event.target.value });
  };
  handleWatchSaleLocChange = event => {
    this.setState({ srchWatchSaleLoc: event.target.value });
  };
  handleWatchSalePriceChange = event => {
    this.setState({ srchWatchSalePrice: event.target.value });
  };
  handleWatchTypeChange = event => {
    this.setState({ srchWatchTypeOption: event.target.value });
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
    fetch("/search", {
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
              type=""
              value={this.state.srchWatchSalePrice}
              onChange=""
              placeholder="Price"
            />
          </div>
          <div>
            <input
              type="text"
              value={this.state.srchWatchBrand}
              onChange=""
              placeholder="Brand"
            />
          </div>
          <div>
            <input
              type="text"
              value={this.state.srchWatchSaleLoc}
              onChange=""
              placeholder="Location"
            />
          </div>
          <div>
            <input
              type="text"
              value={this.state.srchWatchSaleDate}
              onChange=""
              placeholder="DD/MM/YYYY"
            />
          </div>
          <div>
            <input
              type="text"
              value={this.state.srchWatchModelNum}
              onChange=""
              placeholder="Model #"
            />
          </div>
          <div>
            <input
              type=""
              value={this.state.srchWatchImgLoc}
              onChange=""
              placeholder=""
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

export default Search;
