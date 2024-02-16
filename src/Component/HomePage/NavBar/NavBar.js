import React, { useContext, useEffect, useState } from "react";
import "./NavBar.css";
import CarouselArray from "../../../DataLayer/CarouselData/CarouselData";
import { HoverContentContext, NavBarContext } from "../../Basics/ProviderComponent";
import logo from '../../../assets/mobicon_logo.png'
import { Link, useNavigate } from "react-router-dom";
import {AiOutlineMenu} from 'react-icons/ai'

const NavBar = () => {
  const navigate= useNavigate()
  const activeLink2= useContext(NavBarContext).activeLink;
  const {setHoverDisplayVisibility}=useContext(HoverContentContext)
  useEffect(()=>{
    let navbar = document.getElementById('NavBar')
    let func = ()=>{
      document.getElementById('fake_navbar').style.height=navbar.clientHeight+"px"
    }
      if(navbar==null)return
      
      func()
      window.addEventListener("resize",func)
      // window.addEventListener("scroll",)

      return ()=>{
        window.removeEventListener("resize",func)
      }
  },[])

  return (
    <>
    <div id="fake_navbar" style={{width:"100vw"}}></div>
    <nav id="NavBar" className="navbar navbar-expand-lg  ">
      <div className="container-fluid">
        {/* **************************************** */}
        {/* LOGO */}
        <Link to={'/'} className="navbar-brand" style={{width:"max(5vw, 150px)"}} >
          <img src={logo} className="img-fluid" style={{width:"100%"}} alt="" />
        </Link>

        {/* **************************************** */}
        {/* To be changed button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{fontSize:'3vh'}}
        >
          <AiOutlineMenu fill="white"/>
        </button>
        {/* **************************************** */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
          {CarouselArray.map((data,index)=>{
            
            let isActive="";
            if(data['heading']===activeLink2)isActive="active"
            return(
              <span key={'xyzz'+index} onClick={e=>navigate(data['route'])}>
            {index==1?
              <Link3  className="navbar_Link2" isactive={isActive} Link2={data['Link2']}   name={data['heading']} key={"navbar12445"+index} />
              :
              <Link2  className="navbar_Link2" isactive={isActive} Link2={data['Link2']}   name={data['heading']} key={"navbar12445"+index} />
            }
            
            </span>)
          })}
            {/* <Link2 className="navbar_Link2" name={"Crypto"} />
            <Link2 className="navbar_Link2" name={"Events"} />
            <Link2 className="navbar_Link2" name={"Music Concert"} />
            <Link2 className="navbar_Link2" name={"Cosplay"} /> */}
          </ul>
          <div style={{minWidth:"25vw" , display:"flex", justifyContent:"space-around", fontSize:'5vh' }}>
          <ArtistAlley/>
          <Button name={"Book a Tickets"}  onClickFunction={setHoverDisplayVisibility} />
          <Button name={"Book A stall"}  to={'https://form.jotform.com/232185591215051'} />
          <Button name={"Become a sponsor"} to={'https://form.jotform.com/232186149636462'} />
          {/* <Button name={"Artist alley"} to={'https://docs.google.com/forms/d/e/1FAIpQLSfgNRjyikzi2lbMLaQ2yGXC9FDyFjCCh7DCiE1tSykV7OjUVg/viewform'} /> */}
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default NavBar;

const Home = () => {
  return (
    <li className="nav-item">
      <a className="nav-Link2 active" aria-current="page" href="#">
        Home
      </a>
    </li>
  );
};

const Link2 = ({ name,isactive , Link2}) => {
  let isLink2=false
  let link=""
  if(Link2!=undefined)link=Link2
  // <li className="nav-item">
  //       <a className="nav-Link2" href="#">{name}</a>
  // </li>
  return (
    <>
      <section className="effect-1" isactive={isactive} >
        <ul>
          {/* <li className="og-bg">
            <a href="#">
              <span data-hover="Slide in Bot">Slide in Bot</span>
            </a>
          </li> */}
          <li className="rv-bg">
            {/* link to be added afterwards */}
            <a href='' onClick={e=>{
                if(Link2===undefined)e.preventDefault()
                //link to be added afterwards  
                else window.open('', "_blank");
            }}>
              <span data-hover={name}>{name}</span>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};
const Link3 = ({ name,isactive , Link2}) => {
  let isLink2=false
  let link=""
  if(Link2!=undefined)link=Link2
  
  return (
    <>
      <section className="effect-1" isactive={isactive} >
        <ul>
          <li className="rv-bg">
            {/* link to be added afterwards  */}
            <a href=''  target="_blank" rel="noreferrer">
              <span data-hover={name}>{name}</span>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

const Button=({name ,to , onClickFunction})=>{
  return (
    <a href={to} className="navButton"
    target="_blank"
    rel="noreferrer"
     style={{
      marginLeft:"10px",
      padding:"10px", 
      borderRadius:"10px", 
      backgroundColor:"#9900FF",
       color:"white",
       cursor:"pointer",
       border:"1px solid transparent"
       }}
       onClick={e=>{
        if(onClickFunction!==undefined){
          onClickFunction(true)
        }
       }}
       >
    {name}</a>
  )
}

const ArtistAlley=()=>{
  const [active, setActive] = useState(false)
  return(
    <section className="artist_alley navButton" onClick={e=>setActive(val=>!val)}  style={{overflow:active?"visible":"hidden"}}>
      Artist Alley
      <div className="page_cover" style={{position:"fixed",
      width:"100vw",height:"100vh",zIndex:98,display:active?"block":"none",
      top:"0",left:0
      }}
      
      ></div>
      <button className="navButton artist_alley_button artist_alley_button1" 
      style={{opacity:active?1:0, top:active?"110%":"50%",left:active?"-100%":"0", zIndex:active?99:-199}}
      onClick={e=>{if(!active)return;window.open("https://forms.gle/DJidFQJS9MJMSHuj8", '_blank');}}
      >
      BE AN EXHIBITOR 
      </button>
      <button className="navButton artist_alley_button artist_alley_button2" 
      style={{opacity:active?1:0, top:active?"110%":"50%",left:active?"50%":"0", zIndex:active?99:-199}}
      onClick={e=>{if(!active)return;window.open("https://forms.gle/hZkCwXKg8duk4MvPA", '_blank');}}
      >
      BOOK A TABLE 
      </button>
    </section>
  )
}