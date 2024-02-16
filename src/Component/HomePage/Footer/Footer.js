import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer2.css'
import instagram from '../../../assets/instagram.svg'
import facebook from '../../../assets/facebook.svg'
import twitter from '../../../assets/twitter.svg'
import tiktok from '../../../assets/tiktok.svg'
import youtube from '../../../assets/youtube.svg'
import logo from '../../../assets/mobicon_logo.png'
import {HiClipboard} from 'react-icons/hi'
import {TbClipboardCheck} from 'react-icons/tb'



const Footer = () => {
  const [textCopied, setTextCopied] = useState(false)
    const smoothScroll = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      };
    return (
      <footer id='footer' className="w-100 py-4 flex-shrink-0  footer2" >
      <div className="container py-4">
          <div className="row gy-4 gx-5">
              <div className="col-lg-4 col-md-6" style={{alignItems:"center", display:"flex", flexDirection:"column"}}>
                  <img src={logo} alt="Logo" width={200} height={200} className='img-fluid'/>
                  <p className="small row" style={{fontSize:"20px" ,color:"#FFD700", padding:"0px 30px",textAlign:'center'}} >
                  "Join the Pop Culture Revolution at Mobicon Festival!"
                  </p>
                  
              </div>
              <div className="col-lg-4 col-md-6" style={{alignItems:"center", display:"flex", flexDirection:"column"}}>
                  <h5 className="text-white mb-3">Quick links</h5>
                  <ul className="list-unstyled text-muted">
                      <li hover="0.2"><Link to={'/'}><>Home</></Link></li>
                      <li hover="0.2"><a onClick={() => smoothScroll('about_us')}>About</a></li>
                      <li hover="0.2"><Link to = "/privacy">Privacy</Link></li>
                  </ul>
              </div>
              <div className="col-lg-4 col-md-4" style={{marginLeft:"auto"}}>
                  <h5 className="text-white mb-3">Social Media</h5>
                  <div style={{display:"flex" , gap:"20px" }}>
                  <a href="https://www.instagram.com/mobiconfestival/" target='_blank' rel='noreferrer'><img instagram="" alt='' src={instagram} width="25px" height="25px"></img></a>
               <a href="https://www.facebook.com/mobiconfestival" target='_blank' rel='noreferrer'> <img facebook="" alt='' src={facebook} width="25px" height="25px"></img></a>
                <a href="https://twitter.com/Mobiconfestival" target='_blank' rel='noreferrer'><img twitter='' alt='' src={twitter} width="25px" height="25px"></img></a>
               <a href="https://www.youtube.com/@MobiconFestival" target='_blank' rel='noreferrer'><img youtube='' alt='' src={youtube} width="25px" height="25px"></img></a> 
               <a href="https://www.tiktok.com/@mobiconfestival" target='_blank' rel='noreferrer'> <img tiktok='' alt='' src={tiktok} width="25px" height="25px"></img></a>
                  </div>
                  
                  <p className="text-muted" style={{marginBottom:"0", marginTop:"30px", }}>For any queries kindly contact</p>
                <p className="color-white" >info@mobiconfestival.com  &nbsp;
                    {textCopied?
                    <TbClipboardCheck/>
                    :
                    <HiClipboard onClick={e=>clipboard(setTextCopied)}/>
                    }
                </p>
                  
              </div>
          </div>
      </div>
      <div className="row" style={{textAlign:"center" , fontSize:"20px"}}>
      <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. </p>
      </div>
  </footer>
    )
}

export default Footer
const clipboard= (setTextCopied)=>{
  const textToCopy = 'help@smurfelite.com'; // Replace with the actual text you want to copy
navigator.clipboard.writeText(textToCopy)
  .then(() => {
    setTextCopied(true)
    setTimeout(() => {
    setTextCopied(false)
      
    }, 5000);
  })
  .catch((error) => {
    
  });
}
