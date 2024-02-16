import React from 'react'
import playtonialogo from '../../../../../assets/playtonia logo.jpg'
import trinitylogo from '../../../../../assets/Trinity_Logo.png'
import cosplayaelogo from '../../../../../assets/cosplayae-logo.png'
import alphblockz from '../../../../../assets/Alphablockz logo.png'
import tierone from '../../../../../assets/tier_one logo.webp'
import dsclogo from '../../../../../assets/Dubai-sports-council-Logo.png'
import './Sponsors.css'


let arr = [playtonialogo,trinitylogo,cosplayaelogo,tierone,dsclogo];
let arr2 = [["Global Attendees","30,000"],
            ["Branded Booths", 200 ],
            ["Reach", "300M"],
            ["Blockchain Developers", "1,000"],
            ["Active Investors", 200],
            ["Renowned Performers", 150]                
]
const Sponsors = () => {
  return (
    <>
    <div className="container-fluid"  style={{ justifyContent: "center" }}>
    <div className="row" style={{textAlign:"center"}} >
    <h2 className="heading-type-1" >Sponsors & Partners</h2>

    </div>
    <div className="row" style={{justifyContent:"space-around"}}>

        {arr.map((image,index)=>{
          return(
            <div className='col-5 col-md-2 sponsor_image_container' key={"logos"+index} style={{height:'30vh', alignItems:'center',display:'flex'}}>
              <img src={image} alt='' style={{width:'100%',}}></img>
            </div>
          )
        })}
    
    </div>
    <div className='row conclave_container' style={{display:"flex", justifyContent:"space-around"}} >
      {
        arr2.map((data,index)=>{
          return(
            <div className='col-11 col-md-2 row conclave_highlights' key={"sponsorsss"+index}>
            <div className='row conclave_highlights_number'>{data[1]}+</div>
            <div className='row conclave_highlights_text'>{data[0]}</div>
            </div>
          )
        })
      }
    </div>
    </div>
    <br />
    </>
  )
}

export default Sponsors


