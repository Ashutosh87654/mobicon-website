import React, { useContext, useEffect } from "react";
import image from '../../assets/music_concert_page_image.png'
import { NavBarContext } from "../Basics/ProviderComponent";

const MusicConcert = () => {
  const setActiveLink= useContext(NavBarContext).setActiveLink
    useEffect(() => {
      // setActiveLink(' MUSIC CONCERT')
      window.scrollTo(0,0)

    }, [])
  return (
    <div className="container-fluid" style={{ justifyContent:"center",paddingTop:"30px", display:"flex",alignItems:"center",textAlign:"justify"}}>
      <div className="row" style={{color:"white", maxWidth:"1500px",fontSize:"25px"}}>
        <h1 className="homepage_heading"><center><b>Introducing Mobicon: <p>Dubai's Ultimate Music Concert Experience</p></b></center></h1>

        <img src={image}  alt="Music Concert Image" style={{borderRadius:"30px",margin:"40px 0px"}}  />
        <p>
          Prepare to be swept away by the electrifying energy of Mobicon,
          Dubai's most anticipated music concert event. This unforgettable
          extravaganza will bring together music enthusiasts, passionate fans,
          and internationally acclaimed artists from various genres for an
          unparalleled celebration of music, rhythm, and entertainment.
        </p>

        <p>
          Mobicon promises to be a feast for the senses, transporting attendees
          into a world where music reigns supreme. Set against the stunning
          backdrop of Dubai's vibrant cityscape, this concert event will
          showcase an eclectic lineup of top-notch performers, ensuring an
          unforgettable experience for all.
        </p>

        <p>
          As you step foot into the Mobicon venue, you'll find yourself immersed
          in a mesmerizing atmosphere, pulsating with the beats of the world's
          finest musicians. From pop sensations to legendary rock bands, dynamic
          DJs to soulful vocalists, Mobicon offers a diverse range of musical
          styles to satisfy every taste.
        </p>

        <p>
          The stage will come alive with breathtaking performances, stunning
          visuals, and state-of-the-art production that will elevate the concert
          experience to new heights. The sound quality and lighting effects will
          be meticulously designed to create an immersive and captivating
          ambiance, ensuring that every moment resonates with pure musical
          bliss.
        </p>

        <p>
          Mobicon is more than just a concert; it's an all-encompassing
          experience. In addition to the incredible performances, attendees will
          have the opportunity to indulge in various engaging activities
          throughout the event. Explore interactive art installations, enjoy
          delectable food and beverage offerings, and connect with fellow music
          enthusiasts, creating memories that will last a lifetime.
        </p>

        <p>
          Dubai, with its cosmopolitan charm and unwavering dedication to
          entertainment, provides the perfect backdrop for an event like
          Mobicon. Attendees will have the chance to explore this vibrant city,
          experience its renowned hospitality, and revel in its dynamic cultural
          scene.
        </p>

        <p>
          So mark your calendars and get ready for an extraordinary musical
          journey at Mobicon, the music concert event of the year. Whether
          you're a die-hard fan, a casual listener, or simply love the thrill of
          live performances, this event promises to be a spectacular celebration
          of music in all its forms. Join us in Dubai as we unite under the
          spellbinding power of music at Mobicon.
        </p>
      </div>
    </div>
  );
};

export default MusicConcert;
