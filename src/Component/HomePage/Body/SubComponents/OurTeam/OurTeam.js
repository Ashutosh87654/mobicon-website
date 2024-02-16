import React from 'react'
import './Card.css'

const OurTeam = () => {
  return (
    <>
    <h2 className="homepage_heading">Our Team</h2>
    <br />
    <div className="container-fluid">
      <div className="row" style={{justifyContent:"space-around"}}>
        {[1,2,3,4,5].map((data,index)=>{
          return(
            <Card key={"ourTeamCard"+index}/>
          )
        })}
      </div>
    </div>
    <br />
    </>
  )
}

export default OurTeam

const Card= ()=>{
  return(
    <>
      <div className="row team_card" style={{width:"300px",height:"500px", backgroundColor:"cornsilk", justifyContent:"center",padding:"10px"}}>
      {/* OnHover imagediv  */}
      <div className="team_card_hover_div" style={{width:"300px",height:"400px"}}>
      </div>
      {/* Image div below */}
      <div className="row team_card_image_div" style={{width:"300px",height:"400px", backgroundColor:"darkred"}}>
      </div>
      <br />
      <div className="row" style={{textAlign:"center"}}>
        Lorem ipsum dolor sit amet.
      </div>
      </div>
    </>
  )
}