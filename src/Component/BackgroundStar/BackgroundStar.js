import React, { useEffect, useRef } from "react";
import "./BackgroundStar.css";
import { useState } from "react";
import {gsap} from "gsap";
// import background1 from '../../assets/background_dubai1.jpg'
// import background2 from '../../assets/background_dubai.png'
// import background3 from '../../assets/background_dubai3.jpg'
// import background4 from '../../assets/background_dubai4.jpg'
// import background5 from '../../assets/background_dubai5.jpg'

const BackgroundStar = () => {
  const backgroundRef = useRef(null);
  // *********Background Image changing code***************************************
  // useEffect(() => {
  //   let ele= backgroundRef.current
  //     ele= document.getElementById('BodyComponent')
  //     let image1=document.querySelectorAll('.welcome_container_image1')
  //     let image2=document.querySelectorAll('.welcome_container_image2')
  //     let image3=document.querySelectorAll('.welcome_container_image3')
  //     let image4=document.querySelectorAll('.welcome_container_image4')
  //     // let image5=document.querySelectorAll('.welcome_container_image5')
  //     if(image1==null)return
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ele,
  //         scrub: 1.5, // Enable scrubbing
  //         start: 'top top', // Start the animations at the top of the trigger element
  //         end: 'bottom bottom',
  //         markers:{},
  //         toggleActions: "restart reverse restart reverse "
  //       },
  //     });

  //     tl.to(image1,
  //       {opacity:0}).to(image2,
  //         {opacity:0}).to(image3,
  //           {opacity:0}).to(image4,
  //             {opacity:0})
  // }, [])
  


  // ********Background Gradient color changing code*********
  // useEffect(() => {
  //   let xyz=async()=>{
  //     let ele= backgroundRef.current
  //     ele= document.getElementById('BodyComponent')
  //     let ele2=backgroundRef.current
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ele,
  //         scrub: 1.5, // Enable scrubbing
  //         start: 'top 20%', // Start the animations at the top of the trigger element
  //         end: 'bottom -200%',
  //         toggleActions: "restart reverse restart reverse "
  //       },
  //     });
  //     tl.to(ele2, { 
  //       backgroundImage: `radial-gradient(circle at bottom right, #00CCFF 0% , black 50%, black 100%)`,
  //       duration: 0.8,
  //     }).to(ele2, {
  //       backgroundImage: `radial-gradient(circle at bottom right, #39FF14 0% , black 50%, black 100%)`,
  //       duration: 0.8,
  //     }).to(ele2, {
  //       backgroundImage: `radial-gradient(circle at bottom right, #FFFF00 0% , black 50%, black 100%)`,
  //       duration: 0.8,
  //     }).to(ele2, { 
  //       backgroundImage: `radial-gradient(circle at bottom right, #00FFFF 0% , black 50%, black 100%)`,
  //       duration: 0.8,
  //     }).to(ele2, { 
  //       backgroundImage: `radial-gradient(circle at bottom right, #CCFF00 0% , black 50%, black 100%)`,
  //       duration: 0.8,
  //     }).to(ele2, { 
  //       backgroundImage: `radial-gradient(circle at bottom right, #00E5EE 0% , black 50%, black 100%)`,
  //       duration: 0.8,
  //     }).to(ele2, { 
  //       backgroundImage: `radial-gradient(circle at bottom right, #FF00CC 0% , black 50%, black 100%)`,
  //       duration: 0.8,
  //     }).to(ele2, { 
  //       backgroundImage: `radial-gradient(circle at bottom right, #DFFF00 0% , black 50%, black 100%)`,
  //       duration: 0.8,
  //     })
  //   }
  //   xyz()


  // }, []);
  const getColorFromScroll = (scrollPosition) => {
    // Adjust the values as needed to achieve the desired effect
    let red = Math.min(255, Math.floor(scrollPosition / 5));
    const green = Math.min(255, Math.floor(scrollPosition / 10));
    const blue = Math.min(255, Math.floor(scrollPosition / 15));
    let height = window.innerHeight
    let arr=['rgba(17,19,227,1)',`rgba(211,240,96,1)`,`rgba(245,141,57,1)` ,`rgba(136,209,191,1)`]
    if(scrollPosition/height>0.25)red=arr[3]
    else if(scrollPosition/height>0.5)red=arr[2]
    else if(scrollPosition/height>0.75) red=arr[1]
    else red= arr[0]
    



    // Return the color in CSS format (e.g., rgb(255, 100, 50))
    return `radial-gradient(circle, ${red} 0%, black 60%)`;
  };

  return <div id="background" className="background" ref={backgroundRef}>
      {/* <img className='welcome_container_image5' src={background5} alt="" style={{height:'100vh', width:"100vw",position:"absolute", zIndex:-1, backgroundBlendMode:"darken"}} />
      <img className='welcome_container_image3' src={background3} alt="" style={{height:'100vh', width:"100vw",position:"absolute", zIndex:-1, backgroundBlendMode:"darken"}} />
      <img className='welcome_container_image4' src={background4} alt="" style={{height:'100vh', width:"100vw",position:"absolute", zIndex:-1, backgroundBlendMode:"darken"}} />
      <img className='welcome_container_image2' src={background2} alt="" style={{height:'100vh', width:"100vw",position:"absolute", zIndex:-1, backgroundBlendMode:"darken"}} />
      <img className='welcome_container_image1' src={background1} alt="" style={{height:'100vh', width:"100vw",position:"absolute", zIndex:-1, backgroundBlendMode:"darken"}} /> */}
  </div>;
};

export default BackgroundStar;