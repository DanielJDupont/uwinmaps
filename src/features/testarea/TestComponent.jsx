import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./testActions";
import { Button } from "semantic-ui-react";
import TestPlaceInput from "./TestPlaceInput";
import SimpleMap from "./SimpleMap";
import { geocodesByAddress, getLatLng } from "react-places-autocomplete";
import { openModal } from "../modals/modalActions";

const mapState = state => ({
  data: state.test.data
});

const mapDispatchToProps = {
  incrementCounter,
  decrementCounter,
  openModal
};

class TestComponent extends Component {
  state = {
    latlng: {
      lat: 59.95,
      lng: 30.33
    }
  };

  handleSelect = address => {
    geocodesByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setState({
          latlng: latLng
        });
      })
      .catch(error => console.log("Error", error));
  };

  render() {
    const { data, incrementCounter, decrementCounter, openModal } = this.props;
    return (
      <Fragment>
        <h1>Test Component - Test Code</h1>
        <h3>The answer is {data}</h3>
        <Button onClick={incrementCounter} positive content="Test Increment" />
        <Button onClick={decrementCounter} negative content="Test Decrement" />
        <Button
          onClick={() => openModal("TestModal", { data: 42 })}
          negative
          content="Open Modal"
        />
        <br />
        <br />
        <TestPlaceInput selectAddress={this.handleSelect} />
        <SimpleMap key={this.state.latlng.lng} latlng={this.state.latlng} />
      </Fragment>
    );
  }
}

export default connect(mapState, mapDispatchToProps)(TestComponent);
