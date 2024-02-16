const Crypto = ()=>{
    return(
      <div className="crypto">
      <div className='crypto_image' >
              <img src={cryptoImage} className='image-fluid' alt='crypto'/>
          </div>
          <div className="crypto_text">
          <h1 className='crypto_text_h1'>Web 3 CONVENTION</h1> 
          <p className='crypto_text_p'>So mark your calendars and get ready for an unforgettable experience at Mobicon, the esports gaming event of the year. Whether you're a hardcore gamer, a casual fan, or simply intrigued by the world of esports, this event is not to be missed. Join us in Dubai as we celebrate the intersection of technology, competition, and the love for gaming like never before.
          </p>
          </div>
          <div style={{height:"50vh"}}></div>
      </div>
    )
  }
  const crypto_animation=()=>{
    crypto_image_animation()
    crypto_text_animation()
    crypto_heading_animation()
  }
  const crypto_image_animation=()=>{
    let crypto_image= document.querySelectorAll('.crypto_image')
          if(crypto_image==null)return
    gsap.fromTo(crypto_image,{x:"50vw",y:"10vh"},{
      x:"5vw",
      y:"-10vh",
      duration:2,
      scrollTrigger:{
          trigger:crypto_image,
          start:"top 95%",
          end:"50% 50%",
          scrub:2,
          // markers:{},
        toggleActions: "restart none none reverse ",
          
      }
  })
  }
  const crypto_text_animation=()=>{
    let crypto_text=document.querySelectorAll('.crypto_text')
        let crypto_text_p= document.querySelector('.crypto_text')
        
        if(crypto_text==null)return
        gsap.to(crypto_text,{
          duration:2,
          opacity:1,
          scrollTrigger:{
            trigger:crypto_text,
            start:"top 70%",
            end:"50% 50%",
            scrub:1.5,
            // markers:{},
          toggleActions: "restart reverse retart reverse ",
            
        }
      })
  }
  const crypto_heading_animation=()=>{
    let crypto_text_h1= document.querySelector('.crypto_text_h1')
        let background_ref= document.querySelectorAll('.background')
        if(background_ref==null)return
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: background_ref,
            scrub: 1.5, // Enable scrubbing
            start: 'top 95%', // Start the animations at the top of the trigger element
            end: 'bottom 0%',
            // markers:{},
            toggleActions: "restart reverse restart reverse "
          },
        });
        tl.to(crypto_text_h1, { 
          color: `#00CCFF`,
          duration: 0.8,
          opacity:1
        }).to(crypto_text_h1, {
          color: `#39FF14`,
          duration: 0.8,
        }).to(crypto_text_h1, {
          color: `#FFFF00`,
          duration: 0.8,
        }).to(crypto_text_h1, { 
          color: `#00FFFF`,
          duration: 0.8,
        }).to(crypto_text_h1, { 
          color: `#CCFF00`,
          duration: 0.8,
        }).to(crypto_text_h1, { 
          color: `#00E5EE`,
          duration: 0.8,
        }).to(crypto_text_h1, { 
          color: `#FF00CC `,
          duration: 0.8,
        }).to(crypto_text_h1, { 
          color: `#DFFF00`,
          duration: 0.8,
        })
  }