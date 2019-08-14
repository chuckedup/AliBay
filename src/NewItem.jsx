import React, { Component } from "react";
import "./main.css";

class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      watchBrand: "",
      watchImgLoc: undefined,
      watchModelNum: "",
      watchMovementOption: "",
      watchSaleDate: "",
      watchSaleLoc: "",
      watchSalePrice: "",
      watchTypeOption: ""
    };
  }

  handleWatchBrandChange = event => {
    this.setState({...this.state, watchBrand: event.target.value });
  };
  handleWatchImgLocChange = event => {
    this.setState({...this.state, watchImgLoc: event.target.value });
  };
  handleWatchModelNumChange = event => {
    this.setState({...this.state, watchModelNum: event.target.value });
  };
  handleWatchMovementChange = event => {
    this.setState({...this.state, watchMovementOption: event.target.value });
  }; // drop-down bar
  handleWatchSaleDateChange = event => {
    this.setState({...this.state, watchSaleDate: event.target.value });
  };
  handleWatchSaleLocChange = event => {
    this.setState({...this.state, watchSaleLoc: event.target.value });
  };
  handleWatchSalePriceChange = event => {
    this.setState({...this.state, watchSalePrice: event.target.value });
  };
  handleWatchTypeChange = event => {
    this.setState({...this.state, watchTypeOption: event.target.value });
  }; // drop-down bar

  handleSubmit = async evt => {
    evt.preventdefault();
    let data = new FormData();
    data.append(watchBrand, this.state.watchBrand);
    data.append(watchImgLoc, this.state.watchImgLoc);
    data.append(watchModelNum, this.state.watchModelNum);
    data.append(watchMovementOption, this.state.watchMovement);
    data.append(watchSaleDate, this.state.watchSaleDate);
    data.append(watchSaleLoc, this.state.watchSaleLoc);
    data.append(watchSalePrice, this.state.watchSalePrice);
    data.append(watchTypeOption, this.state.watchType);
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
              type="file"
              value={this.state.watchImgLoc}
              onChange={this.handleWatchImgLocChange} 
              name="watchPhoto"   
              placeholder="Upload watch photo here"
              multiple 
              required
            />
          </div>
          <div>
            <input
              type="text"
              value={this.state.watchSalePrice}
              onChange={this.handleWatchSalePriceChange}
              placeholder="Price"
              required
            />
          </div>
          <div>
            <input
              type="text"
              value={this.state.watchBrand}
              onChange={this.handleWatchBrandChange}
              placeholder="Brand"
              required
            />
          </div>
          <div>
            <input
              type="text"
              value={this.state.watchSaleLoc}
              onChange={this.handleWatchSaleLocChange}
              placeholder="Location"
              required
            />
          </div>
          <div>
            <input
              type="text"
              value={this.state.watchSaleDate}
              onChange={this.handleWatchSaleDateChange}
              placeholder="DD/MM/YYYY"
            />
          </div>
          <div>
            <input
              type="text"
              value={this.state.watchModelNum}
              onChange={this.handleWatchModelNumChange}
              placeholder="Model #"
              required
            />
          </div>
          <div>
            <label for="input-watchtype">Style Type</label>
            <select id="input-watchtype" tabIndex="2" value={this.state.watchTypeOption} onChange={this.handleWatchTypeChange}>
              <option value="0">Driver</option>
              <option value="1">Dress</option>
              <option value="2">Field</option>
            </select>
          </div>
          <div>
            <label for="input-watchmovement">Movement Type</label>
            <select id="input-watchmovement" tabIndex="2" value={this.state.watchMovementOption} onChange={this.handleWatchMovementChange}>
              <option value="Quartz">Quartz</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
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
          
        </form>
      </div>
    );
  };
}

export default NewItem;
