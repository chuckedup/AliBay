import React, { Component } from "react";
import "./main.css";

class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      WatchBrand: "",
      WatchImgLoc: undefined,
      WatchModelNum: "",
      WatchMovementOption: "",
      WatchSaleDate: "",
      WatchSaleLoc: "",
      WatchSalePrice: "",
      WatchTypeOption: ""
    };
  }

  handleWatchBrandChange = event => {
    this.setState({...this.state, WatchBrand: event.target.value });
  };
  handleWatchModelNumChange = event => {
    this.setState({...this.state, WatchModelNum: event.target.value });
  };
  handleWatchMovementChange = event => {
    this.setState({...this.state, WatchMovementOption: event.target.value });
  }; // drop-down bar
  handleWatchSaleDateChange = event => {
    this.setState({...this.state, WatchSaleDate: event.target.value });
  };
  handleWatchSaleLocChange = event => {
    this.setState({...this.state, WatchSaleLoc: event.target.value });
  };
  handleWatchSalePriceChange = event => {
    this.setState({...this.state, WatchSalePrice: event.target.value });
  };
  handleWatchTypeChange = event => {
    this.setState({...this.state, WatchTypeOption: event.target.value });
  }; // drop-down bar

  handleSubmit = async evt => {
    evt.preventdefault();
    let data = new FormData();
    data.append(WatchBrand, this.state.WatchBrand);
    data.append(WatchImgLoc, this.state.WatchImgLoc);
    data.append(WatchModelNum, this.state.WatchModelNum);
    data.append(WatchMovementOption, this.state.WatchMovement);
    data.append(WatchSaleDate, this.state.WatchSaleDate);
    data.append(WatchSaleLoc, this.state.WatchSaleLoc);
    data.append(WatchSalePrice, this.state.WatchSalePrice);
    data.append(WatchTypeOption, this.state.WatchType);
    fetch("/newItem", {
      method: "POST",
      body: data
    });
  };

  render = () => {
    return (
      <div>
        <h2>Refine your search</h2>
        <form id="newWatch" onSubmit={this.handleSubmit} method="POST">
          <div>
            <input
              type="text"
              value={this.state.WatchSalePrice}
              onChange={this.handleWatchSalePriceChange}
              placeholder="Price"
              required
            />
          </div>
          <div>
            <input
              type="text"
              value={this.state.WatchBrand}
              onChange={this.handleWatchBrandChange}
              placeholder="Brand"
              required
            />
          </div>
          <div>
            <input
              type="text"
              value={this.state.WatchSaleLoc}
              onChange={this.handleWatchSaleLocChange}
              placeholder="Location"
              required
            />
          </div>
          <div>
            <input
              type="text"
              value={this.state.WatchSaleDate}
              onChange={this.handleWatchSaleDateChange}
              placeholder="DD/MM/YYYY"
            />
          </div>
          <div>
            <input
              type="text"
              value={this.state.WatchModelNum}
              onChange={this.handleWatchModelNumChange}
              placeholder="Model #"
              required
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
        <form id="newWatch" onSubmit={this.handleSubmit} method="POST">
          <div>
            <input type="file" name="watchPhoto" multiple />
            <input type="submit" value="Upload File" name="Add Watch Photo(s)" />
          </div>
        </form>
      </div>
    );
  };
}

export default NewItem;
