import React, { Component, createRef } from "react";
import { Grid, Loader } from "semantic-ui-react";
import { connect } from "react-redux";
import ClassroomList from "../ClassroomList/ClassroomList";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import ClassroomActivity from "../ClassroomActivity/ClassroomActivity";
import { firestoreConnect } from "react-redux-firebase";

import { getClassroomsForDashboard } from "../ClassroomActions";

const query = [
  {
    collection: "activity",
    orderBy: ["timestamp", "desc"],
    limit: 5
  }
];

const mapState = state => ({
  classrooms: state.classrooms,
  loading: state.async.loading,
  activities: state.firestore.ordered.activity
});

const actions = {
  getClassroomsForDashboard
};

class ClassroomDashboard extends Component {
  contextRef = createRef();

  state = {
    moreClassrooms: false,
    loadingInitial: true,
    loadedClassrooms: []
  };

  async componentDidMount() {
    let next = await this.props.getClassroomsForDashboard();

    if (next && next.docs && next.docs.length > 1) {
      this.setState({
        moreClassrooms: true,
        loadingInitial: false
      });
    }
  }

  componentDidUpdate = prevProps => {
    if (this.props.Classrooms !== prevProps.Classrooms) {
      this.setState({
        loadedClassrooms: [
          ...this.state.loadedClassrooms,
          ...this.props.Classrooms
        ]
      });
    }
  };

  getNextClassrooms = async () => {
    const { classrooms } = this.props;
    let lastClassroom = classrooms && classrooms[classrooms.length - 1];
    let next = await this.props.getClassroomsForDashboard(lastClassroom);
    if (next && next.docs && next.docs.length <= 1) {
      this.setState({
        moreClassrooms: false
      });
    }
  };

  render() {
    const { loading, activities } = this.props;
    const { moreClassrooms, loadedClassrooms } = this.state;
    if (this.state.loadingInitial) return <LoadingComponent />;
    return (
      <Grid>
        <Grid.Column width={10}>
          <div ref={this.contextRef}>
            <ClassroomList
              loading={loading}
              classrooms={loadedClassrooms}
              moreClassrooms={moreClassrooms}
              getNextClassrooms={this.getNextClassrooms}
            />
          </div>
        </Grid.Column>
        <Grid.Column width={6}>
          <ClassroomActivity
            activities={activities}
            contextRef={this.contextRef}
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Loader active={loading} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(firestoreConnect(query)(ClassroomDashboard));
