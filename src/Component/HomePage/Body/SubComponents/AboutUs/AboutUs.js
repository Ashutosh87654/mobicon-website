import React, { useEffect, useRef, useState } from "react";
import "./AboutUs.css";
import CarouselArray from "../../../../../DataLayer/CarouselData/CarouselData";
import gsap from "gsap";
import AddSpan from "./SpanAdder";
import { Link, useNavigate } from "react-router-dom";


const AboutUs = () => {
  const [array, setArray] = useState([]);
  const about_ref = useRef([]);
  const text_ref = useRef([]);

  useEffect(() => {
    let arr = [];
    // let arr2 = [];
    // let arr3 = [];
    CarouselArray.forEach((obj) => {
      if (obj["description"] == undefined || obj["description"] == "") return;
      arr.push(obj);
      // arr2.push(React.createRef());
      // arr3.push(React.createRef());
    });
    setArray((val) => arr);
  }, []);

  useEffect(() => {
    let xyz = async () => {
      if(array.length<1)return
      const text2Elements1 = document.querySelectorAll(".about_us_description");
      const text2Elements2 = document.querySelectorAll(".about_us_text_header");
      console.log(text2Elements1[0])
      text2Elements1.forEach(elem=>{
        gsap.fromTo(
          elem,
          { x: 100, opacity: 0 },
          {
            x: "0",
            opacity: 1,
            duration: 1.5,
            scrollTrigger: {
              trigger: elem,
              start: "top 90%",
              end: "50% 50%",
            scrub:1,
              toggleActions: "restart none none reverse ",

            },
          }
        );
      })
      text2Elements2.forEach(elem=>{
        gsap.fromTo(
          elem,
          { y: 100, opacity: 0 },
          {
            y: "0",
            opacity: 1,
            duration: 1.5,
            scrollTrigger: {
              trigger: elem,
              start: "top 95%",
              end: "top 80%",
              scrub:1,
              toggleActions: "restart none none reverse ",
            },
          }
        );
      })
      
    };
    xyz();
  }, [array]);
  const dummy = useRef(null);

  return (
    <div
      className="container-fluid "
      id="about_us"
      style={{ justifyContent: "center", width: "90vw", maxWidth: "1000px",}}
    >
    
      <div className="row ">
        <h2 className="homepage_heading" style={{fontFamily: "Absolut Headline"}}>About Us</h2>
      </div>
      <div className="container-fluid w-75 about_us_text">"{AboutUsText}"</div>
      {array.map((obj, index) => {
        let text = obj["description"];
        let image = obj["descriptionImage"];
        let rightAlign = "";
        if (index % 2 === 1) rightAlign = "true";
        return (
          <div
            className="row my-4 aboutus_photo_text"
            style={{ justifyContent: "center" }}
            key={"aboustdgsg" + index}
            rightalign={rightAlign}
            // ref={about_ref.current[index]}
          >
            {index % 2 === 0 && (
              <>
                <Image
                  img={image}
                  index={index}
                  refvar={about_ref.current[index]}
                />
                <Gap />
                <Description
                  text={text}
                  heading={obj["heading"]}
                  refvar={text_ref.current[index]}
                  index={index}
                  route={obj['route']}

                />
              </>
            )}
            {index % 2 === 1 && (
              <>
                <Description
                  text={text}
                  heading={obj["heading"]}
                  refvar={text_ref.current[index]}
                  index={index}
                  route={obj['route']}
                />
                <Gap />
                <Image
                  index={index}
                  img={image}
                  refvar={about_ref.current[index]}
                />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AboutUs;

const Image = ({ img, refvar, index }) => {
  return (
    <img
      src={img}
      alt=""
      id={"about_us_image" + index}
      ref={refvar}
      className="col-md-6 col-12 img-fluid about_us_image"
      style={{ height: "100%", objectFit: "contain", objectPosition: "center" }}
    ></img>
  );
};
const Gap = () => {
  return <div className="col-md-1"></div>;
};
const Description = ({ text, heading, refvar, index,route }) => {
  
  return (
    <div
      className="col-md-5 col-12 about_us_description"
      ref={refvar}
      style={{
        // backgroundColor: "palegoldenrod",
        // maxHeight: "400px",
        overflowY: "scroll",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "justify",
        flexDirection: "column",
        fontFamily: `'Poppins', sans-serif`,
        // transition:"all 1s ease-in-out",
      }}
    >
      <h3
        style={{
          textAlign: "left",
          fontSize: "22px",
        }}
        className="about_us_text_header"
      >
        MOBICON {heading}
      </h3>
      <p className="about_us_description_text" style={{  fontWeight: "600"}}>
        {text}
      </p>
      {index===1? 
       <a href="https://abcconclave.com/"> <p className="about_us_description_know_more" style={{  fontWeight: "400"}}>Know More</p>
       </a>
      :
      <Link to={route}>
      <p className="about_us_description_know_more" style={{  fontWeight: "400"}}>Know More</p>
      </Link>}
    </div>
  );
};


var AboutUsText = `Mobicon will be a most unique and exciting festival to cater to the Game Geeks, POP Culture and Music
enthusias. This is a special Convention made to unite all the top Esports teams, Crypto Geeks, K-Pop &
Bollywood Music Concert & Cosplay Lovers from all segment of the community together into a single
platform.
#UnitedWeRise`;

// let xyz = async () => {
//   let arr = [];
// let arr2 = [];
// let arr3 = [];
// CarouselArray.forEach((obj) => {
//   if (obj["description"] == undefined || obj["description"] == "") return;
//   arr.push(obj);
//   arr2.push(React.createRef());
//   arr3.push(React.createRef());
// });
// about_ref.current = arr2;
// text_ref.current = arr3;
// setArray((val) => arr);

//   let ele = await about_ref.current[0];
//   await new Promise((resolve, reject) => {
//     while (true) {
//       ele = about_ref.current[0];
//       if (ele == null) console.log(ele);
//       else {
//         resolve();
//         break;
//       }
//     }
//   });

//   about_ref.current.forEach(async (data, index) => {
//     let ele2 = data.current;
//     await new Promise((resolve, reject) => {
//       let count = 1;
//       while (true) {
//         if (count === 1000) {
//           console.log("limit reached");
//           break;
//         }
//         count++;
//         ele2 = data.current;
//         if (ele2 == null) continue;
//         else {
//           resolve();
//           break;
//         }
//       }
//     });
//     console.log(ele2)
//     let temp = "-100%";
//     if (index % 2 === 1) temp = "100%";
//     gsap.fromTo(
//       '.about_us_description',
//       { x: temp, opacity: 0 },
//       {
//         x: "0",
//         opacity: 1,
//         duration: 1.5,
//         scrollTrigger: {
//           trigger: '.about_us_description',
//           start: "top 105%",
//           end: "bottom 15%",
//           // scrub:2,
//           toggleActions: "restart none none reverse ",
//         },
//       }
//     );
//     // gsap.to(ele2,{visibility:0}, )
//   });
//   text_ref.current.forEach(async (data, index) => {
//     let ele2 = data.current;
//     await new Promise((resolve, reject) => {
//       let count = 1;
//       while (true) {
//         if (count === 100) {
//           console.log("limit reached");
//           break;
//         }
//         count++;
//         ele2 = data.current;
//         if (ele2 == null) continue;
//         else {
//           resolve();
//           break;
//         }
//       }
//     });
//     let temp = "100%";
//     if (index % 2 === 1) temp = "100%";
//     gsap.fromTo(
//       ele2,
//       { y: temp, opacity: 0 },
//       {
//         y: "0",
//         opacity: 1,
//         duration: 1.5,
//         scrollTrigger: {
//           trigger: ele2,
//           start: "top 120%",
//           end: "bottom 10%",
//           // scrub:2,
//           toggleActions: "restart none none reverse ",
//         },
//       }
//     );
//     // gsap.to(ele2,{visibility:0}, )

//   });
// };
// xyz();
