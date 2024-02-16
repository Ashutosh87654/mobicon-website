import React, { useContext, useEffect } from "react";
import { HoverContentContext } from "../../Basics/ProviderComponent";
import "./HoverContent.css";
import { useState } from "react";
import { GrClose } from 'react-icons/gr'

const HoverContent = () => {
  const { hoverDisplayVisibility, setHoverDisplayVisibility } =
    useContext(HoverContentContext);
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
        style={{ display: hoverDisplayVisibility ? "flex" : "none" }}
        onClick={(e) => setHoverDisplayVisibility(false)}
      ></div>
      <div
        className="hover_content_container"
        style={{ display: hoverDisplayVisibility ? "flex" : "none" }}
      >
        <GrClose fill="white" onClick={(e) => setHoverDisplayVisibility(false)} />
        {arr.map((data, index) => {
          return <Card text={data.text} />;
        })}
      </div>
    </div>
  );
};

export default HoverContent;

const Card = ({ text }) => {
  return (
    <div className="content">
      {/* <div className="card one">
        <div className="top">
          <div className="title">General</div>
          <div className="price-sec strike">
            <span className="dollar">AED </span>
            <span className="price">200</span>
            
          </div>
          <div className="price-sec">
            <span className="dollar">AED</span>
            <span className="price">100</span>
            
          </div>
          <div className="price-sec invisible">
            <span className="dollar">AED</span>
            <span className="price">99</span>
            
          </div>
        </div>
        <div className="info">
          Affordable entry for those looking to enjoy the event on a budget.
        </div>
        <div className="details">
          <div className="one">
            <span>Access to Booths, Esports, Music festival, Cosplay area.</span>
            <i className="fas fa-check"></i>
          </div>
          <div className="one">
            <span>Chance to win prizes in community Tournaments and gaming activities</span>
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
          <button onClick={e => { window.open("https://www.800tickets.com/events/53234?sid=eyJpdiI6IkxIaVNhNm9MZ1NNQWVzblN0TUpFWXc9PSIsInZhbHVlIjoiejJoYlMzTHo0WFV0TzVFRk9Wc1pjUmNjQWhyWWlWYlAvWHdXdDIzMnpKSDBPS2RSYzlvRnIyTUF6NCswbW9WVk5tc1BySE1vMVpEU05nMTRFd2Eza2c9PSIsIm1hYyI6IjJjYzU5MjI3ZDQ5NTU2ZTFmZTkxODhhMmQ0NTVhNDk5NTA4MzA2Y2Q5ZDdmYzU4YWVmNDFmMDQ3ODkzZTJkZWQiLCJ0YWciOiIifQ==", "_blank") }}>Purchase</button>
        </div>
      </div> */}
      <div className="card four">
        <div className="top" >
          <div className="title">COSPLAY</div>
          <div className="price-sec strike">
            <span className="dollar">AED </span>
            <span className="price">200</span>
            
          </div>
          <div className="price-sec">
            <span className="dollar">AED</span>
            <span className="price">100</span>
            
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
            <span>Special Photoshoot in Cosplay area.</span>
            <i className="fas fa-check"></i>
          </div>
          <div className="one">
            <span>Cosplay collaboration opportunity</span>
            <i className="fas fa-check"></i>
          </div>
          <div className="one">
            <span>Chance to win prizes in cosplay activities </span>
            <i className="fas fa-times"></i>
          </div>
          <div className="one">
            <span> Enhance your event experience</span>
            <i className="fas fa-times"></i>
          </div>
          <button onClick={e => { window.open("https://www.800tickets.com/events/53234?sid=eyJpdiI6IkxIaVNhNm9MZ1NNQWVzblN0TUpFWXc9PSIsInZhbHVlIjoiejJoYlMzTHo0WFV0TzVFRk9Wc1pjUmNjQWhyWWlWYlAvWHdXdDIzMnpKSDBPS2RSYzlvRnIyTUF6NCswbW9WVk5tc1BySE1vMVpEU05nMTRFd2Eza2c9PSIsIm1hYyI6IjJjYzU5MjI3ZDQ5NTU2ZTFmZTkxODhhMmQ0NTVhNDk5NTA4MzA2Y2Q5ZDdmYzU4YWVmNDFmMDQ3ODkzZTJkZWQiLCJ0YWciOiIifQ==", "_blank") }}>Purchase</button>
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
          <button onClick={e => { window.open("https://www.800tickets.com/events/53234?sid=eyJpdiI6IkxIaVNhNm9MZ1NNQWVzblN0TUpFWXc9PSIsInZhbHVlIjoiejJoYlMzTHo0WFV0TzVFRk9Wc1pjUmNjQWhyWWlWYlAvWHdXdDIzMnpKSDBPS2RSYzlvRnIyTUF6NCswbW9WVk5tc1BySE1vMVpEU05nMTRFd2Eza2c9PSIsIm1hYyI6IjJjYzU5MjI3ZDQ5NTU2ZTFmZTkxODhhMmQ0NTVhNDk5NTA4MzA2Y2Q5ZDdmYzU4YWVmNDFmMDQ3ODkzZTJkZWQiLCJ0YWciOiIifQ==", "_blank") }}>Purchase</button>
        </div>
      </div>
      <div className="card three">
        <div className="top">
          <div className="title">VIP</div>
          <div className="price-sec strike">
            <span className="dollar">AED</span>
            <span className="price">2000</span>
            {/* <span className="decimal">.99</span> */}
          </div>
          <div className="price-sec">
            <span className="dollar">AED</span>
            <span className="price">1000</span>
            {/* <span className="decimal">.99</span> */}
          </div>
          <div className="price-sec invisible">
            <span className="dollar">AED</span>
            <span className="price">18</span>
            <span className="decimal">.99</span>
          </div>
        </div>
        <div className="info">
          Premium tickets for the ultimate event experience, including the best seats and exclusive perks.

        </div>
        <div className="details">
          <div className="one">
            <span>All Benefits of Premium Included</span>
            <i className="fas fa-check"></i>
          </div>
          <div className="one">
            <span>Priority preference in All zones.</span>
            <i className="fas fa-check"></i>
          </div>
          <div className="one">
            <span>Get Coupons worth of 3000 Aed</span>
            <i className="fas fa-check"></i>
          </div>
          <div className="one">
            <span>Get special seats in the VIP Lounge area</span>
            <i className="fas fa-check"></i>
          </div>
          <button onClick={e => { window.open("https://www.800tickets.com/events/53234?sid=eyJpdiI6IkxIaVNhNm9MZ1NNQWVzblN0TUpFWXc9PSIsInZhbHVlIjoiejJoYlMzTHo0WFV0TzVFRk9Wc1pjUmNjQWhyWWlWYlAvWHdXdDIzMnpKSDBPS2RSYzlvRnIyTUF6NCswbW9WVk5tc1BySE1vMVpEU05nMTRFd2Eza2c9PSIsIm1hYyI6IjJjYzU5MjI3ZDQ5NTU2ZTFmZTkxODhhMmQ0NTVhNDk5NTA4MzA2Y2Q5ZDdmYzU4YWVmNDFmMDQ3ODkzZTJkZWQiLCJ0YWciOiIifQ==", "_blank") }}>Purchase</button>
        </div>
      </div>
    </div>
  );
};

const arr = [
  {
    text: "conten1",
  },
  // {
  //     text:"conten2"
  // },
  // {
  //     text:"conten3"
  // }
];
