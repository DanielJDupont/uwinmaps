import React from "react";

function Resources() {
  return (
    <div class="p-3">
      <p>
        This is where all of the perks and places where you can get help will
        go!
      </p>
      <div class="card border-dark mb-3" style={{ maxWidth: "18rem" }}>
        <div class="card-header bg-warning">On Campus</div>
        <div class="card-body text-dark">
          <h5 class="card-title">Student Health Services</h5>
          <p class="card-text">
            Confidential healthcare for University of Windsor students provided
            by a team of physicians, nurses, and dietitian. Referrals available
            to an on staff psychiatrist.
          </p>
          <p class="card-text">
            CAW Student Centre Room 242 Mon-Fri 9am-4pm (closed 12-1pm)
            519-973-7002
          </p>
          <p class="card-text">www.uwindsor.ca/health</p>
        </div>
      </div>
    </div>
  );
}

export default Resources;
