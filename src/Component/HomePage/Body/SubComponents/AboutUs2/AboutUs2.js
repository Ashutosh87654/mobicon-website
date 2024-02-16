import React, { useEffect } from "react";
import consoleImage from "../../../../../assets/esports cosole logo.png";
import cryptoImage from "../../../../../assets/crypto logo.png";
import music_concertImage from "../../../../../assets/music concert logo.png";
import "./AboutUs2.css";
import "./Crypto.css";
import "./Cosplay.css";
import "./Music_Concert.css";
import gsap from "gsap";
import { Link } from "react-router-dom";
import background2 from "../../../../../assets/background_dubai.jpg";
import background3 from "../../../../../assets/background_dubai3.jpg";
import background4 from "../../../../../assets/background_dubai4.jpg";
import background5 from "../../../../../assets/background_dubai5.jpg";
import esports_image from "../../../../../assets/esports_description.jpg";
import crypto_image from "../../../../../assets/crypto_description.jpg";
import cosplay_image from "../../../../../assets/cosplay_description.jpg";
import music_concert_image from "../../../../../assets/music_concert_description.jpg";

const AboutUs2 = () => {
  useEffect(() => {
    esports_animation();
    crypto_animation();
    cosplay_animation();
    music_concert_animation();
    transparent_background();
  }, []);

  return (
    <div className="about_us_container">
      <Esports />
      <Crypto />
      <Cosplay />
      <MusicConcert />
    </div>
  );
};

export default AboutUs2;
// ------------------ESPORTS-----------------------------------
const Esports = () => {
  return (
    <div className="esports">
      <img
        className="esports_background"
        src={background3}
        alt=""
        style={{
          height: "100vh",
          minWidth: "100vw",
          backgroundBlendMode: "darken",
        }}
      />

      <div className="esports_img">
        <img src={esports_image} alt="" className="image-fluid"></img>

        <div className="esports_image">
          <img src={consoleImage} className="image-fluid" alt="console" />
        </div>
      </div>
      <div className="esports_text">
        <h1 className="esports_text_h1">ESPORTS</h1>
        <p className="esports_text_p">
          UNLEASHING DIGITAL ARENA : <br />
          WHERE TALENT MEETS
        </p>
        <Link to={"/esports"}>
          <p
            className="about_us_description_know_more"
            style={{ fontWeight: "400" }}
          >
            Know More
          </p>
        </Link>
      </div>
    </div>
  );
};
const esports_animation = () => {
  // esports_image_animation()
  esports_text_animation();
  // esports_heading_animation()
  transparent_background(".esports_background", ".esports");
};
const esports_text_animation = () => {
  let esports_text = document.querySelectorAll(".esports_text");
  let esports_text_p = document.querySelector(".esports_text");

  if (esports_text == null) return;
  gsap.to(esports_text, {
    duration: 2,
    opacity: 1,
    scrollTrigger: {
      trigger: esports_text,
      start: "top 70%",
      end: "50% 50%",
      scrub: 1.5,
      // markers:{},
      toggleActions: "restart reverse retart reverse ",
    },
  });
};

// ------------------CRPYTO-------------------------------------
const Crypto = () => {
  return (
    <div className="crypto">
      <img
        className="crypto_background"
        src={background2}
        alt=""
        style={{
          height: "100vh",
          minWidth: "100vw",
          backgroundBlendMode: "darken",
        }}
      />

      <div className="crypto_img">
        <img src={crypto_image} alt="" className="image-fluid"></img>

        <div className="crypto_image">
          <img src={cryptoImage} className="image-fluid" alt="console" />
        </div>
      </div>

      <div className="crypto_text">
        <h1 className="crypto_text_h1">CRYPTO CONVENTION</h1>
        <p className="crypto_text_p">
          Blockchain revolution unleashed,
          <br />
          sparking decentralized frenzy.
        </p>
        <a href="https://abcconclave.com/">
          {" "}
          <p
            className="about_us_description_know_more"
            style={{ fontWeight: "400" }}
          >
            Know More
          </p>
        </a>
      </div>
    </div>
  );
};
const crypto_animation = () => {
  // crypto_image_animation()
  crypto_text_animation();
  // crypto_heading_animation()
  transparent_background(".crypto_background", ".crypto");
};
const crypto_text_animation = () => {
  let crypto_text = document.querySelectorAll(".crypto_text");
  let crypto_text_p = document.querySelector(".crypto_text");

  if (crypto_text == null) return;
  gsap.to(crypto_text, {
    duration: 2,
    opacity: 1,
    scrollTrigger: {
      trigger: crypto_text,
      start: "top 70%",
      end: "50% 50%",
      scrub: 1.5,
      // markers:{},
      toggleActions: "restart reverse retart reverse ",
    },
  });
};

// --------------------COSPLAY----------------------------------
const Cosplay = () => {
  return (
    <div className="cosplay">
      <img
        className="cosplay_background"
        src={background4}
        alt=""
        style={{
          height: "100vh",
          minWidth: "100vw",
          backgroundBlendMode: "darken",
        }}
      />
      <img
        src={cosplay_image}
        alt=""
        className="esports_img"
        style={{ borderRadius: "20px" }}
      ></img>
      <div className="cosplay_text">
        <h1 className="cosplay_text_h1">cosplay</h1>
        <p className="cosplay_text_p">
          Fandoms unite in epic <br /> cosplay spectacle.
        </p>
        <Link to={"/cosplay"}>
          <p
            className="about_us_description_know_more"
            style={{ fontWeight: "400" }}
          >
            Know More
          </p>
        </Link>
      </div>
    </div>
  );
};
const cosplay_animation = () => {
  cosplay_image_animation();
  cosplay_text_animation();
  transparent_background(".cosplay_background", ".cosplay");
};
const cosplay_image_animation = () => {
  let cosplay_image = document.querySelectorAll(".cosplay_image");
  if (cosplay_image == null) return;
  gsap.fromTo(
    cosplay_image,
    { x: "5vw", y: "10vh" },
    {
      x: "50vw",
      y: "-10vh",
      duration: 2,
      scrollTrigger: {
        trigger: cosplay_image,
        start: "top 95%",
        end: "50% 50%",
        scrub: 2,
        // markers:{},
        toggleActions: "restart none none reverse ",
      },
    }
  );
};
const cosplay_text_animation = () => {
  let cosplay_text = document.querySelectorAll(".cosplay_text");
  let cosplay_text_p = document.querySelector(".cosplay_text");

  if (cosplay_text == null) return;
  gsap.to(cosplay_text, {
    duration: 2,
    opacity: 1,
    scrollTrigger: {
      trigger: cosplay_text,
      start: "top 70%",
      end: "50% 50%",
      scrub: 1.5,
      // markers:{},
      toggleActions: "restart reverse retart reverse ",
    },
  });
};

// --------------------MUSIC CONCERT----------------------------
const MusicConcert = () => {
  return (
    <div className="music_concert">
      <img
        className="music_concert_background"
        src={background5}
        alt=""
        style={{
          height: "100vh",
          minWidth: "100vw",
          backgroundBlendMode: "darken",
        }}
      />

      <div className="crypto_img">
        <img src={music_concert_image} alt="" className="image-fluid"></img>

        <div className="music_concert_image">
          <img src={music_concertImage} className="image-fluid" alt="console" />
        </div>
      </div>

      <div className="music_concert_text">
        <h1 className="music_concert_text_h1">music concert</h1>
        <p className="music_concert_text_p">
          Groovy vibes, pulsating energy, euphoria unleashed
        </p>
        <Link to={"/MusicConcert"}>
          <p
            className="about_us_description_know_more"
            style={{ fontWeight: "400" }}
          >
            Know More
          </p>
        </Link>
      </div>
    </div>
  );
};
const music_concert_animation = () => {
  // music_concert_image_animation()
  music_concert_text_animation();
  // music_concert_heading_animation()
  // transparent_background(".music_concert_background",".music_concert")
};

const music_concert_text_animation = () => {
  let music_concert_text = document.querySelectorAll(".music_concert_text");
  let music_concert_text_p = document.querySelector(".music_concert_text");

  if (music_concert_text == null) return;
  gsap.to(music_concert_text, {
    duration: 2,
    opacity: 1,
    scrollTrigger: {
      trigger: music_concert_text,
      start: "top 70%",
      end: "50% 50%",
      scrub: 1.5,
      // markers:{},
      toggleActions: "restart reverse retart reverse ",
    },
  });
};

// ------------------Background Image change---------

const transparent_background = (element_tag, reference_tag) => {
  let element = document.querySelectorAll(element_tag);
  let reference = document.querySelectorAll(reference_tag);
  if (element == null) return;
  gsap.to(element, {
    opacity: 0,
    scrollTrigger: {
      trigger: reference,
      scrub: 1,
      start: "20% top",
      end: "bottom 40%",
    },
  });
};
