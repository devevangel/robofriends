import React, { Component } from "react";

class SearchBox extends Component {
  state = {};
  render() {
    return (
      <div>
        <input
          className="pa3 ba b--green bg-lightest-blue"
          type="searchbox"
          placeholder="search robots"
          onChange={this.props.updateList}
        />
      </div>
    );
  }
}

export default SearchBox;
