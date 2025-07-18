import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const About = () => {
  return (
    <div>
     <Nav></Nav>
     {/* bannar start */}
 <section id="bannarSec">
        <div id="overlay">
          <div className="container">
              <h3>About Us</h3>
          </div>
        </div>
      </section>
      {/* bannar end */}
      {/* about sec Start */}
      <section id="aboutSection" className="container">
        <div className="left-wrapper">
          <h3>Mental health is a human right, not a privilege.</h3>
          <p className="p">
            Conubia integer etiam dictum eros praesent amet mollis. Maecenas
            fermentum dui molestie platea odio elementum aliquet ac dignissim.
            Eros mollis morbi per montes in.
          </p>
          <ul>
            <li>
              <div className="content-header">
                <i class="ri-group-line"></i>
              </div>
              <div className="content-body">
                <h4>Children Therapy</h4>
                <p>
                  Quam senectus potenti curae tincidunt praesent malesuada amet
                  est ridiculus laoreet consectetur
                </p>
              </div>
            </li>
            <li>
              <div className="content-header">
                <i class="ri-group-line"></i>
              </div>
              <div className="content-body">
                <h4>Children Therapy</h4>
                <p>
                  Quam senectus potenti curae tincidunt praesent malesuada amet
                  est ridiculus laoreet consectetur
                </p>
              </div>
            </li>
            <li>
              <div className="content-header">
                <i class="ri-group-line"></i>
              </div>
              <div className="content-body">
                <h4>Children Therapy</h4>
                <p>
                  Quam senectus potenti curae tincidunt praesent malesuada amet
                  est ridiculus laoreet consectetur
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="right-wrapper">
          <img
            src="https://www.himolde.no/english/research/photos/psykisk-helsearbeid_1920x1810.webp"
            alt=""
          />
        </div>
      </section>
      {/* about sec end */}
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
         {/* value section start */}
      <section id="ourvalueSection">
        <div className="overlay">
          <div className="container">
            <p className="heading"> Our value</p>
            <h3>Building A Better Health Care System</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <a href="">Discover More</a>
          </div>
        </div>
      </section>
      {/* value section end */}
     <Footer></Footer>
    </div>
  )
}

export default About
