/*global google */
import React, { Component } from "react";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { updateEvent, createEvent, cancelToggle } from "../EventActions";

import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from "revalidate";

import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import DateInput from "../../../app/common/form/DateInput";
import PlaceInput from "../../../app/common/form/PlaceInput";
import SelectInput from "../../../app/common/form/SelectInput";
import { TextArea } from "../../../app/common/form/TextArea";
import { TextInput } from "../../../app/common/form/TextInput";
import TestComponent from "../../testarea/TestComponent";
import { toastr } from "react-redux-toastr";
import Swal from "sweetalert2";
import { withFirestore } from "react-redux-firebase";

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};

  if (
    state.firestore.ordered.events &&
    state.firestore.ordered.events.length > 0
  ) {
    event = state.firestore.ordered.events.filter(
      event => event.id === eventId[0] || {}
    );
  }

  return {
    initialValues: event,
    event
  };
};

const validate = combineValidators({
  title: isRequired({ message: "The event title is required !" }),
  category: isRequired({ message: "The category is required" }),
  description: composeValidators(
    isRequired({ message: "Please enter a description !" }),
    hasLengthGreaterThan(4)({
      message: "Description needs to be at least 5 characters !"
    })
  )(),
  city: isRequired("city"),
  venue: isRequired("venue"),
  date: isRequired("date")
});

const actions = {
  updateEvent,
  createEvent
};

const category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" }
];

class EventForm extends Component {
  state = {
    cityLatLng: {},
    venueLatLng: {}
  };

  async componentDidMount() {
    const { firestore, match, history } = this.props;
    let event = await firestore.get(`events/${match.params.id}`);
    console.log(event);
    if (!event.exists) {
      history.push("/events");
      Swal.fire({
        type: "error",
        title: "Sorry!",
        text: "What you are looking for wasn't found!",
        confirmButtonText: "Gotcha!"
      });
      toastr.error("Sorry!", "Event not found!");
    } else {
      this.setState({
        venueLatLng: event.data().venueLatLng
      });
    }
  }

  onFormSubmit = async values => {
    values.venueLatLng = this.state.venueLatLng;
    try {
      if (this.props.initialValues.id) {
        this.props.updateEvent(values);
        this.props.history.push(`/events/${this.props.initialValues.id}`);
      } else {
        let createdEvent = await this.props.createEvent(values);
        this.props.history.push(`/events/${createdEvent.id}`);
      }
    } catch (error) {
      console.log("ERROR onFormSubmit");
    }
  };

  handleCitySelect = selectedCity => {
    geocodeByAddress(selectedCity).then(res =>
      getLatLng(res[0])
        .then(latlng => {
          this.setState({
            cityLatLng: latlng
          });
        })
        .then(() => this.props.change("city", selectedCity))
    );
  };

  handleVenueSelect = selectedVenue => {
    geocodeByAddress(selectedVenue).then(res =>
      getLatLng(res[0])
        .then(latlng => {
          this.setState({
            venueLatLng: latlng
          });
        })
        .then(() => this.props.change("venue", selectedVenue))
    );
  };

  render() {
    const {
      history,
      initialValues,
      invalid,
      submitting,
      pristine,
      event
    } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <TestComponent />
            <Header sub color="blue" content="Event Details" />
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <Field
                name="title"
                component={TextInput}
                placeholder="Give your event a name"
              />
              <Field
                name="category"
                component={SelectInput}
                options={category}
                placeholder="What is your event about?"
              />
              <Field
                name="description"
                component={TextArea}
                placeholder="Tell us about your event"
                rows={3}
              />
              <Field
                name="city"
                component={PlaceInput}
                options={{ types: ["(cities)"] }}
                onSelect={this.handleCitySelect}
                placeholder="Event City"
              />
              <Header sub color="blue" content="Event Location Details" />
              <Field
                name="venue"
                component={PlaceInput}
                placeholder="Event Venue"
                options={{
                  location: new google.maps.LatLng(this.state.cityLatLng),
                  radius: 1000,
                  types: ["establishment"]
                }}
                onSelect={this.handleVenueSelect}
              />
              <Field
                name="date"
                component={DateInput}
                dateFormat="dd LLL yyyy h:mm a"
                showTimeSelect
                timeFormat="HH:mm"
                placeholder="Event Date"
              />

              <Button
                positive
                type="submit"
                disabled={invalid || submitting || pristine}
              >
                Submit
              </Button>
              <Button
                type="button"
                onClick={
                  initialValues.id
                    ? () => history.push(`/events/${initialValues.id}`)
                    : () => history.push("/events")
                }
              >
                Cancel
              </Button>
              <Button
                type="button"
                color={event.cancelled ? "green" : "red"}
                floated="right"
                content={event.cancelled ? "Reactivate event" : "Cancel event"}
                onClick={() => cancelToggle(!event.cancelled, event.id)}
              ></Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default withFirestore(
  connect(
    mapState,
    actions
  )(reduxForm({ form: "eventForm", validate })(EventForm))
);
