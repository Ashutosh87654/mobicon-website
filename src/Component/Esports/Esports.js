import React, { useContext, useEffect } from 'react'
import image from '../../assets/esports.jpg'
import { NavBarContext } from '../Basics/ProviderComponent'
import "./esports.css"

const Esports = () => {
  const setActiveLink = useContext(NavBarContext).setActiveLink
  useEffect(() => {
    // setActiveLink(' ESPORTS')
    // window.scrollTo(0, 0)

  }, [])
  return (
    <div>
      <div className="esports_page_container">
        <div className="esports_heading">
          <h1 className="homepage_heading">
            <center>
              <b>
                Introducing Mobicon: <p>Dubai's Premier Esports Gaming Event</p>
              </b>
            </center>
          </h1>
          <div className="row" style={{ justifyContent: "center" }}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf72uOxGLOsW57g5pfPTuLERWDqQR_raVnfw2BWCiYK5amaTA/viewform"
              rel="noreferrer"
              target="_blank"
              className="form-button-1 esports_button"
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
        {/* ________________________________________________________________________________________________________________ */}

        <div className="streamer_section row">
          <div className="streamer streamer_section_card col-10 col-md-4">
              <h2 >STREAMERS SUMMIT</h2>
              <img src={require('../../assets/esports1_16x9.jpg')} className="img-fluid" alt="" />
              <div className="image_container"></div>
              <p>Streamer Summit is a multi-day event for streamers of all levels to learn, network, and collaborate. It is a place where streamers can come together to learn from industry experts, connect with other creators, and collaborate on new projects.</p>
              <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf72uOxGLOsW57g5pfPTuLERWDqQR_raVnfw2BWCiYK5amaTA/viewform"
              rel="noreferrer"
              target="_blank"
              className="form-button-1 esports_button"
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
          <div className="mlbb streamer_section_card col-10 col-md-4">
          <h2>MLBB</h2>
              <img src={require('../../assets/esports4_16x9.jpg')} className="img-fluid" alt="" />
              <div className="image_container"></div>

              <p>A Mobile Legends: Bang Bang gaming event is a gathering of MLBB players to compete in tournaments, watch professional matches, and participate in other MLBB-related activities. These events can be held online or in person, and they range in size from small local gatherings to large international tournaments.</p>
              <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf72uOxGLOsW57g5pfPTuLERWDqQR_raVnfw2BWCiYK5amaTA/viewform"
              rel="noreferrer"
              target="_blank"
              className="form-button-1 esports_button"
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
        {/* ________________________________________________________________________________________________________________ */}
         <div className="esports_content_container">
          <div className="esports_content">
            <article>
              <p>
                Mobicon 2023 is an exciting esports  event scheduled to take place on October 7th and 8th, 2023, in the vibrant city of Dubai. This event promises to be a thrilling celebration of competitive gaming, featuring top-tier esports tournaments, cutting-edge technology, and a bustling expo floor.
              </p>
              <p>
                Gamers and enthusiasts from around the world will gather to witness epic battles, cheer for their favorite teams, and explore the latest advancements in the gaming industry. Mobicon 2023 is set to be a must-attend event for anyone passionate about esports and gaming culture, offering an unforgettable experience in the heart of Dubai.
              </p>
            </article>
            <article>
              <h2>
                <center>COMMUNITY CUP </center>
              </h2>
              <p>Mobicon not only has a professional esports league to bring the best gamers onto the stage but also hosts multiple community cups, experience zones, and introduces new gaming technologies to attract and engage gamers and esports enthusiasts from various gaming communities. The idea is to provide the entire gaming community with a single platform and empower them to engage themselves through multiple options.</p>

              <div className="imageContainer row">
                <section className="card-style1 col-lg-3 col-10 col-md-4">
                  <h3> <center> PC ZONE</center></h3>
                  {/* <div className="temp_image temp_image1"></div> */}
                  <img src={require('../../assets/Esports-section/pc_zone.webp')} className='img-fluid' alt="" srcset="" />
                  <p>A PC Zone event is a gathering of PC gamers and enthusiasts to celebrate their love of PC gaming. These events can range in size from small local meetups to large conventions with hundreds or even thousands of attendees.</p>
                </section>
                <section className="card-style1 col-lg-3 col-10 col-md-4">
                  <h3> <center> SIM ZONE</center></h3>
                  {/* <div className="temp_image temp_image2"></div> */}
                  <img src={require('../../assets/Esports-section/sim_zone.webp')} className='img-fluid' alt="" srcset="" />
                  <p>A simulation zone event is a type of event where participants can experience a simulated environment. This can be done using a variety of technologies, such as virtual reality (VR), augmented reality (AR), and mixed reality (MR).</p>
                </section>
                <section className="card-style1 col-lg-3 col-10 col-md-4">
                  <h3> <center> CONSOLE ZONE</center></h3>
                  {/* <div className="temp_image temp_image3"></div> */}
                  <img src={require('../../assets/Esports-section/console_zone.jpg')} className='img-fluid' alt="" srcset="" />
                  <p>A console zone event is a gaming event that is specifically focused on console games. These events typically feature a variety of activities and attractions</p>
                </section>
                <section className="card-style1 col-lg-3 col-10 col-md-4">
                  <h3> <center> VR ZONE</center></h3>
                  {/* <div className="temp_image temp_image4"></div> */}
                  <img src={require('../../assets/Esports-section/vr_zone.jpg')} className='img-fluid' alt="" srcset="" />
                  <p>A VR zone event is an event where people can come together to experience virtual reality (VR). VR zone events can be held at a variety of locations, such as VR arcades, entertainment centers, and even private homes.</p>
                </section>
                <section className="card-style1 col-lg-3 col-10 col-md-4">
                  <h3> <center> TECH ZONE</center></h3>
                  {/* <div className="temp_image temp_image5"></div> */}
                  <img src={require('../../assets/Esports-section/tech_zone.webp')} className='img-fluid' alt="" srcset="" />
                  <p>A Tech Zone event is a gathering of people interested in technology, from enthusiasts to professionals. These events can be held online or in person, and they range in size from small meetups to large conferences.</p>
                </section>
                <section className="card-style1 col-lg-3 col-10 col-md-4">
                  <h3> <center> PLAY ZONE</center></h3>
                  {/* <div className="temp_image temp_image6"></div> */}
                  <img src={require('../../assets/Esports-section/play_zone.jpg')} className='img-fluid' alt="" srcset="" />
                  <p>A play zone event is a gathering of children and families to enjoy a variety of fun and educational activities. These events can be held indoors or outdoors, and they typically feature a variety of attractions.</p>
                </section>

              </div>
            </article>
            {/* <article>
              <h1>
                <center>STREAMERS SUMMIT</center>
              </h1>

              <div className="imageContainer row">
                <div className="temp_image temp_image1"></div>
                <div className="temp_image temp_image2"></div>
                <div className="temp_image temp_image3">Bianca</div>
                <div className="temp_image temp_image4"></div>
              </div>
              <p>
                A unique campaign to Create exclusive content on  favorite Streamers, influencer, pro Gamer to make sure to engage a larger audience within very less time.
                </p>
                <p>
                A unique flow to make streamers, influencers, gamers collaborate with each other, Create awesome content. Also getting chance to be showcased in live broadcast for the millions of viewers on big stage.

                With Recognition through MOBICON AWARDS through VVIPs.

              </p>
              
            </article> */}
            <article>
              <h2>
                <center>AWARENESS & MOTIVATE</center>{" "}
              </h2>

              {/* <div className="imageContainer row">
                <div className="temp_image temp_image5"></div>
                <div className="temp_image temp_image6"></div>
                <div className="temp_image temp_image7"></div>
              </div> */}
              <p>
                *Talents will be streaming the game directly on their pages/ channels.<br/>
                *They will be given matches Upon completing the tasks, they will be given a reward.<br/>
                *Big Influencers will promote it on their socials to get more votes and will eventually bring more traffic.<br/>
                *Also, the Talents will earn new followers which will help the game as well as partner to reach to a bigger audience.

              </p>
            </article>
            <article>
              <h2>
                <center>OPPORTUNITIES, EN POWER ECOSYSTEM </center>
              </h2>
              <p>
                *Talents will influence the community to join open qualifiers to enter pro scene.<br/>
                *New Hero's bring new hope which will motivate more gamers to enter and follow the scene.<br/>
                *Talents, Pro teams, new gamers and fans will make this community more concrete<br/>
                *This will eventually create a very good vibe for the Partners who initiated and backed up this.<br/>
                *This will strengthen the relationship between MENA, SC and SEA region gamers and create global collaboration opportunities.

              </p>
            </article>
            {/* <article>
              <h2>
                <center> FANMEET & FANSIGNING</center>
              </h2>
              <p>
                Meet your idols, snap photos with your favourite cosplayers,
                chit-chat, and have the best time of your life.
              </p>
              <p>We make sure that this is an experience you’ll never forget.</p> */}

              {/* <div className="imageContainer row">
              <div className="temp_image temp_image8"></div>
              <div className="temp_image temp_image9">BIANCA</div>
              <div className="temp_image temp_image10">TOMIA</div>
            </div> */}
            {/* </article> */}
            {/* <article>
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
            </article> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Esports