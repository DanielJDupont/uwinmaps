import React, { Component } from "react";
import ClassroomListItem from "./ClassroomListItem";
import InfiniteScroll from "react-infinite-scroller";

export default class ClassroomList extends Component {
  render() {
    const {
      classrooms,
      getNextClassrooms,
      loading,
      moreClassrooms
    } = this.props;
    return (
      <div>
        {classrooms && classrooms.length !== 0 && (
          <InfiniteScroll
            pageStart={0}
            loadMore={getNextClassrooms}
            hasMore={!loading && moreClassrooms}
            initialLoad={false}
          >
            {classrooms &&
              classrooms.map(classroom => (
                <ClassroomListItem key={classroom.id} classroom={classroom} />
              ))}
          </InfiniteScroll>
        )}
      </div>
    );
  }
}
