import React, { Component } from "react";
import { connect } from "react-redux";
import "./itemTile.css";
class UnconnectedItemTile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


let ItemTile = connect()(UnconnectedItemTile);

class Item extends Component {
  selectItem = () => {
    console.log(this.props.item.id);
    this.props.method(
      this.props.item.id,
      this.props.item.description,
      this.props.item.imageLocation,
      this.props.item.cost
    );
  };
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
        
        <br>
        <br>

        <select
          id="input-style"
          name="style"
          tabIndex="2"
          value="{this.state.style}"
          onChange="{this.handleChange}"
          position="relative"
          font-size= "20px"
        >
          <option value="">Style </option>
          <option value="Diver">Diver</option>
          <option value="Dress">Dress</option>
          <option value="Field">Field</option>
        </select>
        <br>
        <select
          id="input-movement"
          tabIndex="2"
          name="movement"
          value="{this.state.movement}"
          onChange="{this.handleChange}"
          font-size= "20px"
          position="relative"
        >
          <option value="">Movement</option>
          <option value="Quartz">Quartz</option>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>
            
              
      </div>
    </div>
      
    );
  }
}

export default ItemTile;
