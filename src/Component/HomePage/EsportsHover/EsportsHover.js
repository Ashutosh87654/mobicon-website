import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { GrClose } from 'react-icons/gr'
import './EsportsHover.css'
import { EsportsHoverContext } from "../../Basics/ProviderComponent";
import { useNavigate } from "react-router-dom";

const EsportsHover = () => {
  const { esportsHoverDisplayVisibility, setEsportsHoverDisplayVisibility } = useContext(EsportsHoverContext);
  const [height, setHeight] = useState();
  useEffect(() => {
    let hover = document.querySelector(".hover_content");
    if (hover == undefined) return;
    let body = document.body;
    setHeight((val) => body.offsetHeight);
    body.style.height = hover.offsetHeight;

    return () => {
      body.style.height = height;
    };
  }, []);

  return (
    <div className="hover_content">
      <div
        className="hover_content_background"
        style={{ display: esportsHoverDisplayVisibility ? "flex" : "none" }}
        onClick={(e) => setEsportsHoverDisplayVisibility(false)}
      ></div>
      <div
        className="hover_content_container"
        style={{ display: esportsHoverDisplayVisibility ? "flex" : "none" }}
      >
        <GrClose fill="white" onClick={(e) => setEsportsHoverDisplayVisibility(false)} />
            <Card />
      </div>
    </div>
  );
};

export default EsportsHover;

const Card = () => {
  const { esportsHoverDisplayVisibility, setEsportsHoverDisplayVisibility } = useContext(EsportsHoverContext);

  const navigate= useNavigate()
  return (
    <div className="content2">
      <div className="card one">
        <div className="top">
          <div className="title">General</div>
          <div className="price-sec strike">
            <span className="dollar">AED </span>
            <span className="price">200</span>
            {/* <span className="decimal">.99</span> */}
          </div>
          <div className="price-sec">
            <span className="dollar">AED</span>
            <span className="price">100</span>
            {/* <span className="decimal">.99</span> */}
          </div>
          <div className="price-sec invisible">
            <span className="dollar">AED</span>
            <span className="price">99</span>
            {/* <span className="decimal">.99</span> */}
          </div>
        </div>
        <div className="info">
          Affordable entry for those looking to enjoy the event on a budget.
        </div>
        <div className="details">
          <div className="one">
            <span>Join the fun</span>
            <i className="fas fa-check"></i>
          </div>
          <div className="one">
            <span>Enjoy gaming experience on a budget</span>
            <i className="fas fa-check"></i>
          </div>
          <div className="one">
            <span>Keep the fun going </span>
            <i className="fas fa-times"></i>
          </div>
          <div className="one">
            <span> Enhance your event experience</span>
            <i className="fas fa-times"></i>
          </div>
          <button onClick={e => {
            setEsportsHoverDisplayVisibility(false)
            navigate("/streamer")}}>
          Purchase</button>
        </div>
      </div>
      <div className="card two">
        <div className="top">
          <div className="title">Platinum</div>
          <div className="price-sec strike">
            <span className="dollar">AED</span>
            <span className="price">800</span>
            {/* <span className="decimal">.99</span> */}
          </div>
          <div className="price-sec">
            <span className="dollar">AED</span>
            <span className="price">400</span>
            {/* <span className="decimal">.99</span> */}
          </div>
          <div className="price-sec invisible">
            <span className="dollar">AED</span>
            <span className="price">250</span>
            <span className="decimal">.99</span>
          </div>
        </div>
        <div className="info">
          Standard tickets offering a well-rounded event experience with good seating options.
        </div>
        <div className="details">
          <div className="one">
            <span>Pictures with Celebrity & influencers</span>
            <i className="fas fa-check"></i>
          </div>
          <div className="one">
            <span>Get workshops in Cosplay,Artist &Tech Zone </span>
            <i className="fas fa-check"></i>
          </div>
          <div className="one">
            <span>Get Coupons worth of 1000 Aed</span>
            <i className="fas fa-check"></i>
          </div>
          <div className="one">
            <span>Get special seats in Grand Stand</span>
            <i className="fas fa-times"></i>
          </div>
          <button onClick={e => { 
            setEsportsHoverDisplayVisibility(false)
            navigate("/mlbb") }}>
          Purchase</button>
        </div>
      </div>
      
    </div>
  );
};

