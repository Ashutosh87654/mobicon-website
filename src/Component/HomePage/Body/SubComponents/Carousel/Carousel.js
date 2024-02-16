import React, { useContext, useEffect, useState } from "react";
import "./Slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {FiChevronsLeft,FiChevronsRight} from 'react-icons/fi'
import sliderData from "../../../../../DataLayer/CarouselData/CarouselData";
import { NavBarContext } from "../../../../Basics/ProviderComponent";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;
  const setActiveLink= useContext(NavBarContext).setActiveLink;
  const [headingArray, setHeadingArray] = useState([])

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  useEffect(() => {
    let wordArray=[]
    let max=0;
    sliderData.forEach(data=>{
      data=data['heading']
      wordArray.push(data)
      if(data.length>max)max=data.length
    })
    let arr=[]
    for(let i=0;i<max;i++){
      for(let j=0;j<sliderData.length;j++){
        let data= sliderData[j]['heading']
        if(data.length<=i){
          arr.push('_')
        }
        else{
          arr.push(data.charAt(i))
        }
      }
    }
    setHeadingArray(val=>arr)
  }, [])
  

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
    <div className="container-fluid row" style={{justifyContent:"center"}}>
    <div className="row" style={{justifyContent:"center" ,position:"relative"}}>
                  <h2 className="carousel_heading" style={{display:"flex",justifyContent:"center", alignItems:"center"}}> 
                    {sliderData.map((data,index)=>{
                      let visib="false"
                      let str= "MOBICON "+data['heading']
                      let text_split= str.split(' ')
                      if(index==currentSlide)visib="true"
                      return <span key={str+index} visib={visib}>{str}</span>
                    })}
                    {/* <span  mob="mobile"> {sliderData[currentSlide].heading}</span> */}
                  
                  </h2>
                  <h2 style={{visibility:"hidden"}}>{sliderData[currentSlide].heading}</h2>
                  <h2 style={{visibility:"hidden"}}>{sliderData[currentSlide].heading}</h2>
    </div>
      <div className="slider">
      {/* <FiChevronsLeft className="arrow prev" onClick={prevSlide} /> */}
      {/* <FiChevronsRight className="arrow next" onClick={nextSlide} /> */}
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <img src={slide.image} alt="slide" className="image" />
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
