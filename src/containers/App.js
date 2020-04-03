import React, { Component } from "react";
import './App.css'
import Scroll from "../components/scroll";
import CardList from "../components/cardList";
import SearchBox from "../components/searchBox";
import ErrorBoundary from '../components/errorBoundary';

class App extends Component {
  state = {
    robotList: [],
    searchfield: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(usersData => usersData.json())
      .then(usersList => this.setState({ robotList: usersList }));
  }

  handleUpdate = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobotsList = this.state.robotList.filter(robotItem => {
      return robotItem.name.toLowerCase().includes(this.state.searchfield);
    });

    if (!this.state.robotList.length) {
      return <h1 className="tc">Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFreinds</h1>
          <SearchBox updateList={this.handleUpdate} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobotsList} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
