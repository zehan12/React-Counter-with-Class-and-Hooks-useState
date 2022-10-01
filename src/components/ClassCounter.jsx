import React, { Fragment } from "react";

class ClassCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1
    }));
  };

  render() {
    return (
      <Fragment>
        <h1>Class Counter</h1>
        <p>{this.state.counter}</p>
        <button onClick={this.handleDecrement}>decrement -</button>
        <button onClick={this.handleIncrement}>increment +</button>
      </Fragment>
    );
  }
}

export default ClassCounter;
