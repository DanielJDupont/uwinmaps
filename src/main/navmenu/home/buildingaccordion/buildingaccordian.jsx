import React from "react";

function BuildingAccordion() {
  return (
    <div id="accordion" class="px-2 mx-auto">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  Erie Hall (EH)
                  <span class="ml-5 badge badge-primary badge-pill">
                    5 Rooms
                  </span>
                </li>
              </ul>
            </button>
          </h5>
        </div>
        <div
          id="collapseOne"
          class="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div class="card-body">
            <ul class="list-group">
              <a href="https://www.uwinmaps.com">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  EH 3123
                  <span class="badge badge-primary badge-pill">
                    Show Directions
                  </span>
                </li>
              </a>
              <a href="https://www.uwinmaps.com">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  EH 1114
                  <span class="badge badge-primary badge-pill">
                    Show Directions
                  </span>
                </li>
              </a>
              <a href="https://www.uwinmaps.com">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  EH 1115
                  <span class="badge badge-primary badge-pill">
                    Show Directions
                  </span>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="headingTwo">
          <h5 class="mb-0">
            <button
              class="btn btn-link collapsed"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  Center for Engineering and Innovation (CE)
                  <span class="ml-5 badge badge-primary badge-pill">
                    7 Rooms
                  </span>
                </li>
              </ul>
            </button>
          </h5>
        </div>
        <div
          id="collapseTwo"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordion"
        >
          <div class="card-body">
            <ul class="list-group">
              <a href="https://www.uwinmaps.com">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  CE 1100
                  <span class="badge badge-primary badge-pill">
                    Show Directions
                  </span>
                </li>
              </a>
              <a href="https://www.uwinmaps.com">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  CE 1101
                  <span class="badge badge-primary badge-pill">
                    Show Directions
                  </span>
                </li>
              </a>
              <a href="https://www.uwinmaps.com">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  CE 1102
                  <span class="badge badge-primary badge-pill">
                    Show Directions
                  </span>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingThree">
          <h5 class="mb-0">
            <button
              class="btn btn-link collapsed"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  Toldo Health Education Centre (TC)
                  <span class="ml-5 badge badge-primary badge-pill">
                    7 Rooms
                  </span>
                </li>
              </ul>
            </button>
          </h5>
        </div>
        <div
          id="collapseThree"
          class="collapse"
          aria-labelledby="headingThree"
          data-parent="#accordion"
        >
          <div class="card-body">
            <ul class="list-group">
              <a href="https://www.uwinmaps.com">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  TC 100
                  <span class="badge badge-primary badge-pill">
                    Show Directions
                  </span>
                </li>
              </a>
              <a href="https://www.uwinmaps.com">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  TC 102
                  <span class="badge badge-primary badge-pill">
                    Show Directions
                  </span>
                </li>
              </a>
              <a href="https://www.uwinmaps.com">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  TC 104
                  <span class="badge badge-primary badge-pill">
                    Show Directions
                  </span>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuildingAccordion;
