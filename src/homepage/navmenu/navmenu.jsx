import React from "react";

function NavMenu() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="https://www.uwinmaps.com/">
          UWinMaps
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="https://www.uwinmaps.com/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://www.uwinmaps.com/">
                Link
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="https://www.uwinmaps.com/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="https://www.uwinmaps.com/">
                  Action
                </a>
                <a class="dropdown-item" href="https://www.uwinmaps.com/">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="https://www.uwinmaps.com/">
                  Something else here
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="https://www.uwinmaps.com/"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavMenu;
