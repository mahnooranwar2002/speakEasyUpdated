import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
      <Nav></Nav>
       <section id="bannarSec">
        <div id="overlay">
          <div className="container">
              <h3>Contact Us</h3>
          </div>
        </div>
      </section>
        <div className="container" id='contactBox'>
          <div className="right-wrapper">
            <h5>Send us a message</h5>
            <h4>Let's start talking with us</h4>
            <p>Vestibulum phasellus class molestie donec ligula pharetra odio. Sem ligula hac aliquam magnis placerat massa.</p>
            <form action="">
              <div className="row">
               
                <input type="text" className='control con'  placeholder='Name'/>
              </div>
               <div className="row">
                <input type="text" className='control' placeholder='Email'/>  <input type="text"  className='control' placeholder='Phone'/>
              </div>
              <div className="row"><textarea placeholder='write a massage' name="" id="" className='text-area '></textarea></div>
           <div className="row">
               <input type="submit" value="Send"  className='btn'/>
           </div>
            </form>
          </div>
          <div className="left-wrapper"><img src="img/img_5.png" alt="" /></div>
          
        </div>
         {/* service  start */}
      <section id="serviceSec">
        <div className="container">
          <div className="row">
            <div className="card">
              <div className="inner">
                <i class="ri-brain-line"></i>
                <h3>Presence</h3>
                <p>
                  Vivamus nec class taciti magna donec est tempor maximus
                  suspendisse efficitur ipsum.
                </p>
                <a href="">learn more</a>
              </div>
            </div>
            <div className="card" id="innerTwo">
              <div className="inner">
                <i class="ri-layout-masonry-fill"></i>
                <h3>Therapy Sessions</h3>
                <p>
                  Vivamus nec class taciti magna donec est tempor maximus
                  suspendisse efficitur ipsum.
                </p>
                <a href="">learn more</a>
              </div>
            </div>
            <div className="card">
              <div className="inner">
                <i class="ri-dna-fill"></i>

                <h3>Counseling Services</h3>
                <p>
                  Vivamus nec class taciti magna donec est tempor maximus
                  suspendisse efficitur ipsum.
                </p>
                <a href="">learn more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* service end */}
      <Footer></Footer>
        </>
  )
}

export default Contact
