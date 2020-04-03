import React, { Component } from "react";

class Card extends Component {
  state = {};
  render() {
    return (
      <div className="bg-light-green dib ma2 pa3 br3 grow bw2 shadow-5 tc">
        <img
          src={`https://robohash.org/${this.props.id}?size=200x200`}
          alt="robot"
        />
        <div>
          <h2>{this.props.name}</h2>
          <p>{this.props.email}</p>
        </div>
      </div>
    );
  }
}

export default Card;
