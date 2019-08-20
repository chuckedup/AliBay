import React, { Component } from "react";
import { connect } from "react-redux";
import "./searchFilter.css";

class UnconnectedSearchFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      max: 100000,
      brand: "",
      movement: "",
      style: "",
      search: ""
    };
  }

  handleChange = event => {
    let obj = { [event.target.name]: event.target.value };
    this.setState(obj);
  };

  handleNumChange = event => {
    let obj = { [event.target.name]: Number(event.target.value) };
    this.setState(obj);
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.dispatch({ type: "adv-search", search: this.state });
  };

  render() {
    return (
      <div className="container1">
        <div className="innerContainer">
          <form onSubmit={this.submitHandler}>
            <h2>Price Range</h2>
            <div className="center-search">
              <input
                type="text"
                name="min"
                id="minPrice"
                placeholder="Min"
                onChange={this.handleNumChange}
              />{" "}
              to{" "}
              <input
                type="text"
                name="max"
                id="maxPrice"
                placeholder="Max"
                onChange={this.handleNumChange}
              />
            </div>
            <div>
              <input
                list="brand"
                className="brand"
                name="brand"
                placeholder="Brand"
                onChange={this.handleChange}
              />

              <datalist id="brand">
                <option value="Rolex" />
                <option value="Seiko" />
                <option value="Omega" />
                <option value="Casio" />
                <option value="Hamilton" />
                <option value="Tissot" />
                <option value="Junghans" />
              </datalist>
            </div>
            <div>
              <select
                id="input-minprice"
                name="style"
                tabIndex="2"
                value={this.state.style}
                onChange={this.handleChange}
                position="relative"
                font-size="25px"
              >
                <option value="">Style </option>
                <option value="Diver">Diver</option>
                <option value="Dress">Dress</option>
                <option value="Field">Field</option>
              </select>
            </div>
            <div>
              <select
                id="input-movement"
                tabIndex="2"
                name="movement"
                value={this.state.movement}
                onChange={this.handleChange}
                font-size="25px"
                position="relative"
              >
                <option value="">Movement</option>
                <option value="Quartz">Quartz</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
            </div>
            <div>
              <input type="submit" value="Search" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

let SearchFilter = connect()(UnconnectedSearchFilter);

export default SearchFilter;
