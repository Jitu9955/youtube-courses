import React from "react";
import "./../Headsecond/Home.css";

import Carousel from "react-bootstrap/Carousel";

const Cthree = () => {
  return (
    <div className="sliid">
      <Carousel>
        <Carousel.Item>
          <img
            width="1500"
            height="500"
            alt=""
            src="https://img-b.udemycdn.com/notices/featured_carousel_slide/image_responsive/af55e45e-be41-4cfa-a1bc-72e9fac4b7e2.jpg"
            loading="lazy"
          />

          <Carousel.Caption>
            <h3 className="textclr">Last day to save</h3>
            <p className="pclor">
              Courses designed to help you reach your goals start at just ₹449 —
              sale ends today.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="1500"
            height="500"
            alt=""
            src="https://img-b.udemycdn.com/notices/featured_carousel_slide/image_responsive/d9cd3886-6c29-4dc8-9390-28d991fe3c27.png"
            loading="eager"
          />
          <Carousel.Caption>
            <h3 className="textclr">We missed you, Students</h3>
            <p className="pclor">
              Get back on track and achieve your goals. 5–10 minutes a day will
              do.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="1500"
            height="500"
            alt=""
            src="https://img-b.udemycdn.com/notices/web_carousel_slide/image_responsive/18f671e2-0a9a-42fa-bba8-80e6bd845105.png"
            loading="lazy"
          />
          <Carousel.Caption>
            <h3 className="textclr">Code your future</h3>
            <p className="pclor">
              Take control of your career. Learn the latest skills in web
              development.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Cthree;
