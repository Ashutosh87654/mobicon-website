import { gsap } from "gsap";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./AboutUs3.css";
import AboutUsCarousel from './AboutUsCarousel'

const AboutUs3 = () => {
  useEffect(() => {
    for (let i = 0; i < AboutUsArray.length; i++) {
      if (i != AboutUsArray.length - 1)
        transparent_background(
          ".about_us_background" + i,
          ".about_us_section" + i
        );
      description_text_animation(
        ".description_text_container" + i,
        ".about_us_section" + i
      );
      // same animation as text is given to image here
      description_text_animation(
        ".description_image_container" + i,
        ".about_us_section" + i
      );
    }
  }, []);

  return (
    <div className="about_us_continer">
      {AboutUsArray.map((data, index) => {
        let background = data["background"];
        let heading = data["heading"];
        let picture = data["picture"];
        let svg = data["svg"];
        let linkTo = data["linkTo"];
        let content = data["content"];
        let buttonText = data["buttonText"];
        let href = data["href"];
        let eventUspData = data["eventUspData"];
        let odd = "";
        if (index % 2 === 1) odd = "odd";
        return (
          <div
            className={"about_us_section my-4 about_us_section" + index}
            key={"aboutUsContent" + index}
          >
            <img
              src={background}
              alt={heading}
              className={
                "about_us_section_background about_us_background" + index
              }
              style={{ zIndex: (index + 2) * -10 }}
            />
            <div
              className={
                "description_text_container description_text_container" + index
              }
              odd={odd}
            >
              <div className="description_text_center">
                <h1>{heading}</h1>
                {content}
                <h2>EVENT USP :</h2>
                <ul>
                  {eventUspData.map((data, index) => {
                    return <li key={"eventUsp" + index}>• {data}</li>;
                  })}
                </ul>
                {linkTo !== null ? (
                  <Link to={linkTo}>
                    <button className="about_us_description_know_more">
                      {buttonText}
                    </button>
                  </Link>
                ) : (
                  // link to be added here afterwards
                  <a href={href} target={href ? "_blank" : ""} rel="noreferrer">
                    <button className="about_us_description_know_more">
                      {buttonText}
                    </button>
                  </a>
                )}
              </div>
            </div>
            <div
              className={
                "description_image_container description_image_container" +
                index
              }
              odd={odd}
            >
              {/* <img
                src={picture}
                alt={heading}
                className="description_image image-fluid"
              /> */}
              <div className="description_image">
                <AboutUsCarousel sliderData={picture}/>
              </div>
              {svg && (
                <img
                  src={svg}
                  alt={heading}
                  odd={odd}
                  className="description_svg image-fluid"
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutUs3;


let AboutUsArray = [
  {
    heading: "ESPORTS & GAMING",
    eventUspData: [
      "INFLUENCER SHOW MATCH",
      "IND Vs PAK- CRICKET",
      "FAN FAVORITE TEAM SHOW MATCH",
    ],
    picture:[
       require("../../../../../assets/esports_description.jpg"),
       require("../../../../../assets/esports1.jpg"),
       require("../../../../../assets/esports2.jpg"),
       require("../../../../../assets/esports3.jpg"),
       require("../../../../../assets/esports4.jpg"),

    ],
    svg: require("../../../../../assets/esports cosole logo.png"),
    background: require("../../../../../assets/background_dubai3.jpg"),
    linkTo: "/esports",
    buttonText: "KNOW MORE",
    content: (
      <p>
        Mobicon Not Only Having Pro Esports League To Bring Best Gamers Into The
        Stage But Also Having Multiple Community Cups, Experience Zones, New
        Gaming Techs To Attract And Engage Gamers & Esports Enthusiasts Of
        Multiple Gaming Community. The Idea Is To Provide The Whole Gaming
        Community To A Single Platform And Give Them The Power To Engage
        Themselves Through Multiple Options.
        <br />
      </p>
    ),
  },
  // {
  //   heading: "BLOCKCHAIN CONVENTION",
  //   eventUspData: [
  //     "CONFERENCES & EXPERIENCE ZONES",
  //     "NETWORKING LUNCH",
  //     "HACKATHON & WORKSHOP",
  //   ],
  //   picture:[
  //      require("../../../../../assets/crypto_description.jpg"),
  //      require("../../../../../assets/crypto1.jpg"),
  //      require("../../../../../assets/crypto3.jpg"),
  //      require("../../../../../assets/crypto4.jpg"),

  //   ],
  //   svg: require("../../../../../assets/crypto logo.png"),
  //   background: require("../../../../../assets/background_dubai.jpg"),
  //   linkTo: null,
  //   buttonText: "KNOW MORE",
  //   content: (
  //     <p>
  //       The Alphablockz aims to bring together the world's largest and
  //       fastest-growing Web3 communities under one roof. In Dubai, the summit
  //       aims to raise public awareness of the potential relating to blockchain
  //       technology.
  //       <br />
  //     </p>
  //   ),
  // },
  {
    heading: "COSPLAY",
    eventUspData: [
      "Meet the Celebrities",
      "Marketplace (POP Culture)",
      "Exhibitors",
      "Artist Workshop",
    ],
    picture:[
       require("../../../../../assets/cosplay_description.jpg"),
       require("../../../../../assets/cosplay1.webp"),
       require("../../../../../assets/cosplay2.webp"),
       require("../../../../../assets/cosplay3.webp"),
       require("../../../../../assets/cosplay4.webp"),

    ],
    svg: null,
    background: require("../../../../../assets/background_dubai4.jpg"),
    linkTo: "/cosplay",
    href: "",
    buttonText: "KNOW MORE",
    content: (
      <p>
        Mobicon brings you the newest concept of Cosplay event in Dubai with a
        full glamourous ramp show with 43m long Cat Walk. Where you’re accepted
        and embraced for being yourself. Meet the cast and have a fantastic day
        of fun, creativity and excitement. But most importantly, create all of
        those memories with the people you care about the most. Because this
        event is for you. To celebrate a weekend together you’ll never forget.
        <br />
      </p>
    ),
  },
  {
    heading: "MUSIC CONCERT",
    eventUspData: [
      "MIKEY BUSTOS",
      "CHOCOLATE FACTORY",
      "FLOW G",
      "SHANTI DOPE",
      "GLOC-9",
      "OMAR BALIW",
      "GUDDHIST",
      "HERO"
      
    ],
    picture:[
       require("../../../../../assets/music_concert_description.jpg"),
       require("../../../../../assets/musicconcert1.jpg"),
       require("../../../../../assets/musicconcert2.jpg"),
       require("../../../../../assets/musicconcert4.jpg"),

    ],
    svg: require("../../../../../assets/music concert logo.png"),
    background: require("../../../../../assets/background_dubai5.jpg"),
    buttonText: "KNOW MORE",
    linkTo: "/MusicConcert",
    href: null,
    content: (
      <p className="music_concert_text_p">
        As the sun sets on Dubai, the first day of MobioCon Festival kicks off
        with an electrifying blend of beats, mesmerizing visuals, and an
        atmosphere charged with excitement. Renowned Rappers and music maestros
        from around the world will transform the Dubai Amphitheatre into a
        pulsating dance floor, creating an unmissable experience for music
        enthusiasts.
        <br />
      </p>
    ),
  },
  {
    heading: "STUDENT SAGA",
    eventUspData: ["HACKATHON"],
    picture:[
       require("../../../../../assets/student_saga_description.png"),
       require("../../../../../assets/students1.jpg"),
       require("../../../../../assets/students2.jpg"),
       require("../../../../../assets/students3.jpg"),
       require("../../../../../assets/students4.jpg"),

    ],
    svg: null,
    background: require("../../../../../assets/background_dubai5.jpg"),
    buttonText: "Register Here",
    linkTo: null,
    href: "https://form.jotform.com/232215470458050",
    content: (
      <p className="student_saga_text_p">
        Get ready to embark on an unforgettable gaming journey at the Dubai
        Student GameFest, scheduled to take place on October 7th and 8th, 2023,
        in the vibrant city of Dubai. This two-day extravaganza is designed
        exclusively for students, bringing together the best of gaming,
        technology, and entertainment under one roof.
      </p>
    ),
  },
];
const transparent_background = (element_tag, reference_tag) => {
  let element = document.querySelectorAll(element_tag);
  let reference = document.querySelectorAll(reference_tag);
  console.log(element.length);
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
const description_text_animation = (element_tag, reference_tag) => {
  let element = document.querySelectorAll(element_tag);
  let reference = document.querySelector(reference_tag);

  if (element == null) return;
  gsap.to(element, {
    duration: 2,
    opacity: 1,
    scrollTrigger: {
      trigger: reference,
      start: "top 70%",
      end: "50% 50%",
      scrub: 1.5,
      // markers:{},
      toggleActions: "restart reverse retart reverse ",
    },
  });
};
