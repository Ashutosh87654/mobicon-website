import React, { useContext, useEffect } from "react";

import { NavBarContext } from "../Basics/ProviderComponent";
import "./Cosplay.css";

const Cosplay = () => {
  const setActiveLink = useContext(NavBarContext).setActiveLink;
  // useEffect(() => {
  //   // setActiveLink(' COSPLAY')
  //   window.scrollTo(0,0)
  // }, [])

  return (
    <div className="cosplay_page_container">
      <div className="cosplay_heading">
        <h1 className="homepage_heading">
          <center>
            <b>
              Introducing Mobicon: <p>COSPLAY AE CENTRAL</p>
            </b>
          </center>
        </h1>
        <div className="row" style={{ justifyContent: "center" }}>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf72uOxGLOsW57g5pfPTuLERWDqQR_raVnfw2BWCiYK5amaTA/viewform"
            rel="noreferrer"
            target="_blank"
            className="form-button-1 cosplay_button"
            style={{
              textAlign: "center",
              textDecoration: "none",
              width: "max-content",
              padding: "10px 20px",
              textShadow: "none",
            }}
          >
            {" "}
            Register Now
          </a>
        </div>
      </div>
      <div className="cosplay_content_container">
        <div className="cosplay_content">
          <article>
            <p>
              BE YOUR OWN CHARACTER! May it be Anime, Marvel, DC, Cartoon,
              Movie, Game or even TV Show Characters, we welcome you to your
              full blast COSPLAY Experience!
            </p>
            <p>
              COSPLAY.AE proudly brings you a variety of unique features that
              every cosplayer or geek would surely enjoy! This includes the most
              awaited Cosplay Competition, Workshops, Professional &
              International Cosplay Guests, Meet & Greet, photo ops and more! Be
              prepared! You’re gonna slay the runway!
            </p>
          </article>
          <article>
            <h2>
              <center> Meet the Judges</center>
            </h2>
            
            <div className="imageContainer row">
              <div className="temp_image temp_image1">Gibmesoju</div>
              <div className="temp_image temp_image2">jeenzo</div>
              {/* <div className="temp_image temp_image3">Bianca</div> */}
              {/* <div className="temp_image temp_image4"></div> */}
            </div>
            <p>
              We present a professional line up of crafters and performers that
              has made incredible impact in the COSPLAY Community globally.
              Their exceptional props work, talents and beauty are surely a
              thing you dont want to miss.
            </p>
          </article>
          <article>
            <h2>
              <center>International Cosplayers Guests</center>{" "}
            </h2>
            
            <div className="imageContainer row">
              <div className="temp_image temp_image5">Kongkyungmin</div>
              <div className="temp_image temp_image6">Tomia</div>
              <div className="temp_image temp_image7">Satiella</div>
            </div>
          </article>
          <article>
            <h2>
              <center>COSPLAY COMPETITION</center>
            </h2>
            <p>
              Light up the stage with a series of most amazing performances of
              the night. It’s the battle of craftsmen, and dramatic entrée!
            </p>
            <p>
              Win Cash Prizes and trophies and get home with a prize pool of AED
              20,000 brought to you by COSPLAY.AE
            </p>
          </article>
          <article>
            <h2>
              <center> FANMEET & FANSIGNING</center>
            </h2>
            <p>
              Meet your idols, snap photos with your favourite cosplayers,
              chit-chat, and have the best time of your life.
            </p>
            <p>We make sure that this is an experience you’ll never forget.</p>
            
            {/* <div className="imageContainer row">
              <div className="temp_image temp_image8"></div>
              <div className="temp_image temp_image9">BIANCA</div>
              <div className="temp_image temp_image10">TOMIA</div>
            </div> */}
          </article>
          <article>
            <h2>
              <center> WORKSHOPS</center>
            </h2>
            <p>
              Indulge and DIY your way to cosplay! Choose your best-suited
              passion and enhance your skills with the guidance of our experts.
            </p>
            <h3>
              <center> MAKE UP (50 AED per person)</center>
            </h3>
            <p>
              Do you Love Cosplay? Would you like to learn how to bring any
              character to life through makeup? In this Course you will learn
              Basic techniques that will teach you how to transform yourself
              into any character using easy tips, techniques, and more
              importantly, how to save money! Cosplay Makeup is for everyone, no
              matter your age, skin type, or experience, in this course you will
              learn the skills to be able to cosplay any character by using the
              art of makeup
            </p>

            <h3>
              <center> CRAFTMANSHIP (50 AED per person)</center>
            </h3>
            <p>
              WINGS, SWORDS, CANONS WITH LED AND EVERYTHING CRAFTING! Whichever
              your level is you can join our crafting workshops (basic,
              intermediate, expert).
            </p>

            <h3>
              <center> SEWING  (50 AED per person)</center>
            </h3>
            <p>
              Looking to add some extra flair to your cosplay? COSPLAY.AE offers
              you the best sewing workshop all throughout the event to help you
              add that personal touch to your costume.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Cosplay;
