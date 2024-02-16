import React from "react";
import Sponsor from './SubComponents/Sponsors/Sponsors'
import WelcomeText from "./SubComponents/WelcomeText/WelcomeText";
import AboutUs2 from "./SubComponents/AboutUs2/AboutUs2";
import AboutUs3 from "./SubComponents/AboutUs3/AboutUs3";

const Body = () => {
  
  return (
    <div id="BodyComponent" data-scroll-section>
      <WelcomeText/>
      <AboutUs3/>
      <Sponsor/>
    </div>
  );
};

export default Body;