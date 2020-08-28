import React, { useState } from "react";
import "./slider.scss";
import ImgComp from "./ImgComp";
import i1 from "./pics/dinosaur.jpeg";
import i2 from "./pics/lionss.jpeg";
import i3 from "./pics/monkey.jpeg";
import i4 from "./pics/peacocks.jpeg";
import i5 from "./pics/tiger.jpeg";

function Slider() {
  const [x, setX] = useState(0);
  let sliderArr = [
    <ImgComp src={i1} />,
    <ImgComp src={i2} />,
    <ImgComp src={i3} />,
    <ImgComp src={i4} />,
    <ImgComp src={i5} />,
  ];

  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    // <div className="carousel">
    <div className="slider">
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}>
        <i class="fas fa-chevron-left"></i>
      </button>
      <button id="goRight" onClick={goRight}>
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
    // </div>
  );
}

export default Slider;
