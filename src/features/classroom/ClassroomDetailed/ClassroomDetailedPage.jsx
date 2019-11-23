import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import ClassroomDetailedHeader from "./ClassroomDetailedHeader";
import { ClassroomDetailedInfo } from "./ClassroomDetailedInfo";
import { ClassroomDetailedChat } from "./ClassroomDetailedChat";
import { ClassroomDetailedSidebar } from "./ClassroomDetailedSidebar";
import { withFirestore } from "react-redux-firebase";
import { toastr } from "react-redux-toastr";
import Swal from "sweetalert2";
import { objectToArray } from "../../../app/common/util/helpers";

const mapState = (state, ownProps) => {
  const classroomId = ownProps.match.params.id;

  let classroom = {};

  if (
    state.firestore.ordered.classrooms &&
    state.firestore.ordered.classrooms.length > 0
  ) {
    classroom = state.firestore.ordered.classrooms.filter(
      classroom => classroom.id === classroomId[0] || {}
    );
  }

  return {
    classroom
  };
};

class ClassroomDetailedPage extends Component {
  async componentDidMount() {
    const { firestore, match, history } = this.props;
    let classroom = await firestore.get(`classrooms/${match.params.id}`);
    console.log(classroom);
    if (!classroom.exists) {
      history.push("/classrooms");
      Swal.fire({
        type: "error",
        title: "Sorry!",
        text: "What you are looking for wasn't found!",
        confirmButtonText: "Gotcha!"
      });
      toastr.error("Sorry!", "Event not found!");
    }
  }

  render() {
    const { classroom } = this.props;
    const attendees =
      classroom && classroom.attendees && objectToArray(classroom.attendees);
    return (
      <Grid>
        <Grid.Column width={10}>
          <ClassroomDetailedHeader classroom={classroom} />
          <ClassroomDetailedInfo classroom={classroom} />
          <ClassroomDetailedChat />
        </Grid.Column>
        <Grid.Column width={6}>
          <ClassroomDetailedSidebar attendees={attendees} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default withFirestore(connect(mapState)(ClassroomDetailedPage));
