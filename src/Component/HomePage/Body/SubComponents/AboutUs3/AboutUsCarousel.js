import React, { useContext, useEffect, useState } from "react";
import "../Carousel/Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {FiChevronsLeft,FiChevronsRight} from 'react-icons/fi'
import { NavBarContext } from "../../../../Basics/ProviderComponent";

const Slider = ({sliderData}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;
  const setActiveLink= useContext(NavBarContext).setActiveLink;
  const [headingArray, setHeadingArray] = useState([])

  const autoScroll = true; 
  let slideInterval;
  let intervalTime = 5000;
  

  const nextSlide = () => {
    setCurrentSlide(val=>currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };
  
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    
    setActiveLink(val=>sliderData[currentSlide]['heading'])
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="container-fluid row" style={{justifyContent:"center", width:"100%" ,overflow:"hidden"}}>
      <div className="slider">
      {/* <FiChevronsLeft className="arrow prev" onClick={prevSlide} /> */}
      {/* <FiChevronsRight className="arrow next" onClick={nextSlide} /> */}
      {sliderData.map((image, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <img  src={image} alt="slide" className="image about_us_carousel_image" />
              </div>
            )}
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Slider;
