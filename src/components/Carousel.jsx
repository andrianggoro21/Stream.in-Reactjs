import React from "react";
import carousel1 from "../assets/images/img-carousel1.png";
import carousel2 from "../assets/images/img-carousel2.png";
import carousel3 from "../assets/images/img-carousel3.png";

function Carousel() {
  return (
    <>
      <div className="container-md mt-4">
        <div id="myCarousel" className="carousel slide carousel-fade mb-4" data-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner shadow-style rounded">
            <div className="carousel-item active" data-bs-interval="4000" style={{ backgroundImage: `url(${carousel1})` }}></div>
            <div className="carousel-item" data-bs-interval="4000" style={{ backgroundImage: `url(${carousel2})` }}></div>
            <div className="carousel-item" data-bs-interval="4000" style={{ backgroundImage: `url(${carousel3})` }}></div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Carousel;