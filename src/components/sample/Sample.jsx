import React from "react";
import Slider from "react-slick";
import "./Sample.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Sample = () => {
  // var settings = {
  //     dots: true,
  //     infinite: false,
  //     speed: 500,
  //     slidesToShow: 3,
  //     slidesToScroll: 2,
  //     nextArrow: <FaArrowLeft />        ,
  //     prevArrow: <FaArrowRight />        ,
  //     initialSlide: 0,

  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 3,
  //         }
  //       },
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2,
  //           initialSlide: 2
  //         }
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1
  //         }
  //       }
  //     ]
  //   };

  return (
    <div className="sample">
      <h1>Sample menu for the day</h1>

      <div className="menu">
        <div className="days">
          <button>mon</button>
          <button>tu</button>
          <button>we</button>
          <button>thu</button>
          <button>fri</button>
          <button>sat</button>
          <button>sun</button>
        </div>
        <div className="meals">
          <h2>
            3 meals, <span>1541 ccal</span>
          </h2>

          <Carousel>
            <div>
              <img src={require("../../assets/sample/1.png")} alt="" />
              <h3>Title of meal</h3>
              <p>180 g / 200 ccal</p>
            </div>
            <div>
              <img src={require("../../assets/sample/2.png")} alt="" />
              <h3>Title of meal</h3>
              <p>180 g / 200 ccal</p>
            </div>
            <div>
              <img src={require("../../assets/sample/3.png")} alt="" />
              <h3>Title of meal</h3>
              <p>180 g / 200 ccal</p>
            </div>
            <div>
              <img src={require("../../assets/sample/1.png")} alt="" />
              <h3>Title of meal</h3>
              <p>180 g / 200 ccal</p>
            </div>
            <div>
              <img src={require("../../assets/sample/2.png")} alt="" />
              <h3>Title of meal</h3>
              <p>180 g / 200 ccal</p>
            </div>
            <div>
              <img src={require("../../assets/sample/3.png")} alt="" />
              <h3>Title of meal</h3>
              <p>180 g / 200 ccal</p>
            </div>
            <div>
              <img src={require("../../assets/sample/1.png")} alt="" />
              <h3>Title of meal</h3>
              <p>180 g / 200 ccal</p>
            </div>
            <div>
              <img src={require("../../assets/sample/2.png")} alt="" />
              <h3>Title of meal</h3>
              <p>180 g / 200 ccal</p>
            </div>
            <div>
              <img src={require("../../assets/sample/3.png")} alt="" />
              <h3>Title of meal</h3>
              <p>180 g / 200 ccal</p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
