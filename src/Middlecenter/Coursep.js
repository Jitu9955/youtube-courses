import React from "react";
import { MDBContainer, MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

const Coursep = () => {
  return (
    <MDBContainer className="text-center text-danger text-capitalize my-5 w-200">
      <div>
        <MDBCarousel showIndicators showControls fade>
          <MDBCarouselItem
            className="w-200 d-block"
            itemId={1}
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
            alt="..."
          >
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselItem>

          <MDBCarouselItem
            className="w-200 d-block"
            itemId={2}
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
            alt="..."
          >
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselItem>

          <MDBCarouselItem
            className="w-200 d-block"
            itemId={3}
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
            alt="..."
          >
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </MDBCarouselItem>
        </MDBCarousel>
      </div>
    </MDBContainer>
  );
};
export default Coursep;
