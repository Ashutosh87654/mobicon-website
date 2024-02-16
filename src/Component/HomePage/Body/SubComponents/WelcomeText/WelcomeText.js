import React, { useEffect } from 'react'
import './WelcomeText.css'
import background from  '../../../../../assets/background_dubai1.jpg'
import backgroundvideo from '../../../../../assets/video12.mp4'
import gsap  from 'gsap'

const WelcomeText = () => {
  useEffect(() => {
    let welcome_container = document.querySelectorAll('.welcome_container')
    let welcome_container_image= document.querySelectorAll('.welcome_container_image')
    if(welcome_container_image==null)return
    gsap.to(welcome_container_image,{
      opacity:0,
      scrollTrigger:{
        trigger:welcome_container,
        scrub:1,
        start:"bottom 100%",
        end:"bottom 30%"
      }
    })

  }, [])
  
  return (
    <div >
      <div className='welcome_container'>
      {/* <video className='welcome_container_image' height={"100%"} width={"100%"} src={backgroundvideo} alt="" style={{height:"100vh", Width:"100vw", backgroundBlendMode:"darken"}}  autoPlay  loop muted>
        <source src={backgroundvideo}  type="video/mp4" />
        
        </video>  */}
        <img className='welcome_container_image' src={background} alt="" style={{height:'100vh', minWidth:"110vw", backgroundBlendMode:"darken"}} />

        <h1 className='mobicon_text'>
        <div>
          <p>
           <span className='line_1'> Festival </span> <span className='year'></span>  <br/>
           {/* <span className='line_2'> World  trade center, dubai </span> <br/> */}
           <span className='line_3'>&nbsp;APRIL 2024 </span>
          </p>
        </div>
        
         
         
        
        <h4 className='welcome_text'>Welcome &nbsp;to</h4>
        <span className='flicker_letter1'>M</span>
        <span className='flicker_letter2'>O</span>
        <span className='flicker_letter3'>B</span>
        <span className='flicker_letter4'>I</span>
        <span className='flicker_letter5'>C</span>
        <span className='flicker_letter6'>O</span>
        <span className='flicker_letter7'>N</span>
        </h1>

      </div>
    </div>
  )
}

export default WelcomeText
