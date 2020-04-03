import React, { Component } from "react";
import Card from "./card";

class CardList extends Component {
  state = {};

  render() {
    return (
      <div>
        {this.props.robots.map(robot => {
          return (
            <Card
              key={robot.id}
              id={robot.id}
              name={robot.name}
              email={robot.email}
            />
          );
        })}
      </div>
    );
  }
}

export default CardList;
