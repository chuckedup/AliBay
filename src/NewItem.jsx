import React, { Component } from "react";
import { connect } from "react-redux";
import "./newItem.css";

class UnconnectedNewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "",
      img: undefined,
      model: "",
      movement: "",
      country: "",
      price: "",
      style: "",
      title: "",
      description: ""
    };
  }

  handleChange = event => {
    let obj = { [event.target.name]: event.target.value };
    this.setState(obj);
  };

  handleFileChange = event => {
    this.setState({ img: event.target.files[0] });
  };

  handleSubmit = async event => {
    event.preventDefault();
    console.log("submit");
    let data = new FormData();
    data.append("brand", this.state.brand);
    data.append("img", this.state.img);
    data.append("model", this.state.model);
    data.append("movement", this.state.movement);
    data.append("country", this.state.country);
    data.append("price", this.state.price);
    data.append("style", this.state.style);
    data.append("username", this.props.username);
    data.append("title", this.state.title);
    data.append("desc", this.state.description);
    fetch("/newItem", {
      method: "POST",
      body: data
    });
  };

  render = () => {
    console.log(this.state.img);

    //When an Image is uploaded tell the user
    let imageUploaded = <span />;
    if (this.state.img !== undefined) {
      imageUploaded = (
        <div className="image-uploaded-text">
          {this.state.img.name} Uploaded
        </div>
      );
    }
    return (
      <div id="container-newItem">
        <div className="form-wrap-newItem">
          <form onSubmit={this.handleSubmit} id="item-form">
            <h1 className="newItem-header">Add an Item</h1>
            <div className="form-group-newItem">
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                placeholder="Title"
                required
              />
            </div>
            <div className="form-group-newItem border-textarea ">
              <textarea
                name="description"
                value={this.state.description}
                form="item-form"
                onChange={this.handleChange}
                placeholder="Description"
              />
            </div>
            <div className="form-group-newItem">
              <input
                type="text"
                name="price"
                value={this.state.price}
                onChange={this.handleChange}
                placeholder="Price"
                required
              />
            </div>
            <div className="form-group-newItem">
              <input
                type="text"
                name="brand"
                value={this.state.brand}
                onChange={this.handleChange}
                placeholder="Brand"
                required
              />
            </div>
            <div className="form-group-newItem">
              <input
                type="text"
                name="model"
                value={this.state.model}
                onChange={this.handleChange}
                placeholder="Model #"
                required
              />
            </div>
            <div className="form-group-newItem">
              <input
                type="text"
                name="country"
                value={this.state.country}
                onChange={this.handleChange}
                placeholder="Country"
                required
              />
            </div>
            <div className="form-group-newItem">
              <select
                id="input-style"
                name="style"
                tabIndex="2"
                value={this.state.style}
                onChange={this.handleChange}
              >
                <option value="">Select Style </option>
                <option value="Diver">Diver</option>
                <option value="Dress">Dress</option>
                <option value="Field">Field</option>
              </select>
            </div>
            <div className="form-group-newItem">
              <select
                id="input-movement"
                tabIndex="2"
                name="movement"
                value={this.state.movement}
                onChange={this.handleChange}
              >
                <option value="">Select Movement</option>
                <option value="Quartz">Quartz</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
            </div>
            <div className="form-group-newItem">
              <label for="file-upload" className="custom-file-upload">
                Image Upload
              </label>
              {imageUploaded}
              <input
                id="file-upload"
                type="file"
                onChange={this.handleFileChange}
                name="Photo"
                required
              />
            </div>
            <div className="form-group-newItem">
              <input type="submit" value="Add Item" />
            </div>
          </form>
        </div>
      </div>
    );
  };
}

let mapStatetoProps = state => {
  return { username: state.username };
};

let NewItem = connect(mapStatetoProps)(UnconnectedNewItem);

export default NewItem;
