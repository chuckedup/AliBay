import React, { Component } from "react";
import { connect } from "react-redux";
import "./searchFilter.css";

class UnconnectedSearchFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="container1">
        <div>
          <h2>Price Range</h2>
          <form>
            <label for="minPrice">Min </label>
            <input type="text" name="minPrice" id="minPrice" />
            to
            <label for="maxPrice"> Max</label>
            <input type="text" name="maxPrice" id="maxPrice" />
            <select
              id="input-minprice"
              name="style"
              tabIndex="2"
              value="{this.state.style}"
              onChange="{this.handleChange}"
              position="relative"
              font-size="25px"
            >
              <option value="">Style </option>
              <option value="Diver">Diver</option>
              <option value="Dress">Dress</option>
              <option value="Field">Field</option>
            </select>
            <select
              id="input-movement"
              tabIndex="2"
              name="movement"
              value="{this.state.movement}"
              onChange="{this.handleChange}"
              font-size="25px"
              position="relative"
            >
              <option value="">Movement</option>
              <option value="Quartz">Quartz</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
            </select>
          </form>
        </div>
      </div>
    );
  }
}

let SearchFilter = connect()(UnconnectedSearchFilter);

export default SearchFilter;
