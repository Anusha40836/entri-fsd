import React from "react";

function MainCardContent() {
  return (
    <div>
      <div class="container mt-4">
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <img
                src="https://via.placeholder.com/300"
                class="card-img-top"
                alt="Image"
              />
              <div class="card-body">
                <h5 class="card-title">Card Title 1</h5>
                <p class="card-text">
                  Some quick example text to build on the card title.
                </p>
                <a href="#" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img
                src="https://via.placeholder.com/300"
                class="card-img-top"
                alt="Image"
              />
              <div class="card-body">
                <h5 class="card-title">Card Title 2</h5>
                <p class="card-text">
                  Some quick example text to build on the card title.
                </p>
                <a href="#" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img
                src="https://via.placeholder.com/300"
                class="card-img-top"
                alt="Image"
              />
              <div class="card-body">
                <h5 class="card-title">Card Title 3</h5>
                <p class="card-text">
                  Some quick example text to build on the card title.
                </p>
                <a href="#" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCardContent;
