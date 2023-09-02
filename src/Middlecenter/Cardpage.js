import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Swiper from "swiper";
const Cardpage = () => {
  return (
    <React.Fragment>
      <h1 className="text-center text-danger text-capitalize my-5">
        All course check now
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div class="card">
              <img
                class="card-img-top"
                src="https://picsum.photos/200/300"
                alt="Card image cap"
                height="200px"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div class="card">
              <img
                class="card-img-top"
                src="https://picsum.photos/201/300"
                alt="Card image cap"
                height="200px"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div class="card">
              <img
                class="card-img-top"
                src="https://picsum.photos/200/301"
                alt="Card image cap"
                height="200px"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Cardpage;
