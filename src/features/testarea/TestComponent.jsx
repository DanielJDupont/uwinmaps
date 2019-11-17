import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./testActions";
import { Button } from "semantic-ui-react";
import TestPlaceInput from "./TestPlaceInput";

const mapState = state => ({
  data: state.test.data
});

// available actions
const mapDispatchToProps = {
  incrementCounter,
  decrementCounter
};

class TestComponent extends Component {
  render() {
    const { data, incrementCounter, decrementCounter } = this.props;
    return (
      <Fragment>
        <h1>Test Component - Test Code</h1>
        <h3>The answer is {data}</h3>
        <Button onClick={incrementCounter} positive content="Test Increment" />
        <Button onClick={decrementCounter} negative content="Test Decrement" />
        <TestPlaceInput />
        <br />
        <br />
      </Fragment>
    );
  }
}

export default connect(mapState, mapDispatchToProps)(TestComponent);
