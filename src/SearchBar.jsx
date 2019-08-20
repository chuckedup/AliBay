import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./searchBar.css";

class UnconnectedSearchBar extends Component {
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

  searchChangeHandler = event => {
    this.setState({ search: event.target.value });
  };

  submitHandler = async event => {
    event.preventDefault();
    // let data = new FormData();
    // data.append("searchQuery", this.state.search);
    // let response = await fetch("/searchQuery", { method: "POST", body: data });
    // let responseBody = await response.text();
    // let body = JSON.parse(responseBody);
    this.props.dispatch({ type: "search-query", search: this.state.search });
    console.log(this.props.history);
    this.props.history.push("/allItems");
  };

  render() {
    return (
      <div className="search-bar-container">
        <div className="search-bar">
          <form onSubmit={this.submitHandler}>
            <input
              className="search-text"
              type="text"
              placeholder="Search ..."
              value={this.state.search}
              onChange={this.searchChangeHandler}
            />
            <button type="submit" className="submit-search">
              <i class="fa fa-search" />
            </button>
          </form>
        </div>
      </div>
    );
  }
}

let SearchBar = connect()(UnconnectedSearchBar);

export default withRouter(SearchBar);
