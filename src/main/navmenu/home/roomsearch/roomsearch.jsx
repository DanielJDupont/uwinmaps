import React from "react";

function RoomSearch() {
  return (
    <div>
      <div class="card mx-2">
        <div class="card-header">
          <p> Room Finder: </p>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search For Room"
              aria-label="Search For Room"
            />
            <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RoomSearch;
