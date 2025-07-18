import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Index = () => {
  return (
    <>
      <Nav></Nav>
      {/* bannar start*/}
      <section id="bannar">
        <div id="overlay">
          <div className="container">
            <div className="left-wrapper">
              <h3>Discover Your Strengths with Mindwell.</h3>
              <p>
                Amet congue donec placerat ante volutpat consectetuer metus
                suscipit cras ad per sapien tempor
              </p>
              <a href="">Discover More</a>
            </div>
            <div className="right-wrapper"></div>
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

      <section id="care-section">
        <div className="container" id="sec">
          <div className="left-wrapper">
            <h3>We want you to get the care you deserve.</h3>
            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <ul>
              <li>
                <span>
                  <i class="ri-check-line"></i>
                </span>
                <p>People with Anxiety or Depression</p>
              </li>
              <li>
                <span>
                  <i class="ri-check-line"></i>
                </span>
                <p>Busy Professionals</p>
              </li>
              <li>
                <span>
                  <i class="ri-check-line"></i>
                </span>
                <p>Communities in Need of Emotional Support</p>
              </li>
              <li>
                <span>
                  <i class="ri-check-line"></i>
                </span>
                <p>Individuals Seeking Personal Growth</p>
              </li>
            </ul>
          </div>
          <div className="right-wrapper">
            <div className="card-sec">
              <img src="img/mental-health.jpg" alt="" />
            </div>
            <div className="row">
              <img src="img/pic1.jpg" alt="" />

              <div className="con">
                <h4>25+</h4>

                <p>Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* treament */}
      <section className="treamentSec">
        <div className="container">
          <div className="heading">
            <h3>Get treatment for all your mental healthcare needs.</h3>
          </div>
          <div className="card-section">
            <div className="card" id="cardword">
              <h4>Individual Therapy</h4>
              <p>Conubia neque sagittis pede et praesent felis vestibulum</p>
              <a href="">learn More</a>
            </div>
            <div className="card" id="card-1"></div>
            <div className="card" id="cardword">
              <h4>Family Counseling</h4>
              <p>Conubia neque sagittis pede et praesent felis vestibulum</p>
              <a href="">learn More</a>
            </div>
            <div className="card" id="card-2"></div>
            <div className="card" id="cardword">
              <h4>Group Therapy</h4>
              <p>Conubia neque sagittis pede et praesent felis vestibulum</p>
              <a href="">learn More</a>
            </div>
            <div className="card" id="cardword">
              <h4>Group Therapy</h4>
              <p>Conubia neque sagittis pede et praesent felis vestibulum</p>
              <a href="">learn More</a>
            </div>

            <div className="card" id="cardword">
              <h4>Career Counseling</h4>
              <p>Conubia neque sagittis pede et praesent felis vestibulum</p>
              <a href="">learn More</a>
            </div>
            <div className="card" id="cardword">
              <h4>Children Therapy</h4>
              <p>Conubia neque sagittis pede et praesent felis vestibulum</p>
              <a href="">learn More</a>
            </div>
            <div className="card" id="card-3"></div>
          </div>
        </div>
      </section>
      {/* treatment */}
      {/* Toward */}
      <section id="towardSec">
        <div className="overlay">
          <div className="container" id="towardSection">
            <div className="right-wrapper">
              <span>
                <i class="ri-play-reverse-fill"></i>
              </span>
              <h4>Take the First Step towards Wellness with Mindwell.</h4>
              <p>
                Felis vel magnis arcu gravida primis orci. Tempus ultrices neque
                morbi posuere viverra massa ridiculus.
              </p>
              <p>
                Take the First Step towards Wellness with Mindwell. Felis vel
                magnis arcu gravida primis orci. Tempus ultrices neque morbi
                posuere viverra massa ridiculus.
              </p>
              <a href="">Get start</a>
            </div>
            <div className="left-wrapper"></div>
          </div>
        </div>
      </section>
      {/* choose us start */}
      <section id="chooseSec">
        <div className="container" id="choosebox">
          <div className="right-wrapper">
            <h3>Focusing on you, with the best therapeutic care.</h3>
          </div>

          <div className="left-wrapper">
            <p>
              Vestibulum vulputate leo parturient tellus nec odio in volutpat
              eros tristique luctus. Montes parturient congue id sed lacinia
              pulvinar integer habitasse elementum venenatis.
            </p>
            <a href="">learn more</a>
          </div>
        </div>
        <div className="container" id="chooseboxSec">
          <ul>
            <li>
              <i class="ri-layout-grid-fill"></i>
              <div className="content-body">
                <h5>Personalized Approach</h5>
                <p>
                  Mauris ridiculus maecenas sapien tristique sollicitudin ligula
                  vulputate
                </p>
              </div>
            </li>
            <li>
              <i class="ri-hourglass-2-fill"></i>
              <div className="content-body">
                <h5>Personalized Approach</h5>
                <p>
                  Mauris ridiculus maecenas sapien tristique sollicitudin ligula
                  vulputate
                </p>
              </div>
            </li>
            <li>
              <i class="ri-hand-heart-fill"></i>{" "}
              <div className="content-body">
                <h5>Personalized Approach</h5>
                <p>
                  Mauris ridiculus maecenas sapien tristique sollicitudin ligula
                  vulputate
                </p>
              </div>
            </li>
            <li>
              <i class="ri-tools-line"></i>
              <div className="content-body">
                <h5>Personalized Approach</h5>
                <p>
                  Mauris ridiculus maecenas sapien tristique sollicitudin ligula
                  vulputate
                </p>
              </div>
            </li>
            <li>
              <i class="ri-bar-chart-grouped-fill"></i>
              <div className="content-body">
                <h5>Personalized Approach</h5>
                <p>
                  Mauris ridiculus maecenas sapien tristique sollicitudin ligula
                  vulputate
                </p>
              </div>
            </li>
            <li>
              <i class="ri-p2p-fill"></i>
              <div className="content-body">
                <h5>Personalized Approach</h5>
                <p>
                  Mauris ridiculus maecenas sapien tristique sollicitudin ligula
                  vulputate
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* choose us end */}
      {/* feedback Sec Start */}
      <section className="container" id="FeedbackSec">
        <div className="right-wrapper">
          <img src="img/img_11.png" alt="" />
        </div>
        <div className="left-wrapper">
          <h4>Client Feedback & Reviews</h4>
        </div>
      </section>
      {/* feedback sec end */}
      {/* service sec Start */}
      <section className="ServiceSec">
        <div className="container" id="servicesBox">
          <div className="right-wrapper">
            <h5>Start Living Your Best Life with Mindwell's Guidance.</h5>
            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="row">
              <ul>
                <li>
                  <span>
                    <i class="ri-check-line"></i>
                  </span>
                  <p>People with Anxiety or Depression</p>
                </li>
                <li>
                  <span>
                    <i class="ri-check-line"></i>
                  </span>
                  <p>Busy Professionals</p>
                </li>

                <li>
                  <span>
                    <i class="ri-check-line"></i>
                  </span>
                  <p>Individuals Seeking Personal Growth</p>
                </li>
              </ul>
             
            </div>
          </div>
          <div className="left-wrapper">
            <img src="img/pic2.jpg" alt="" />
          </div>
        </div>
      </section>
      {/* service sec End */}
      {/* contact */}
      <section className="contactSec">
        <div className="overlay">
          <div className="container" id="contactInfo">
            <span>Get a quote</span>
            <h4>Get treatment for all your mental healthcare needs.</h4>
          </div>
        </div>
      </section>
      <div className="container" id="contact-Sec">
        <div className="right-wrapper">
          <form action="">
            <div className="row">
              <input
                type="text"
                className="text-control"
                placeholder="First Name"
              />

              <input
                type="text"
                className="text-control"
                placeholder="Last Name"
              />
            </div>
            <div className="row">
              <input type="text" className="text-control" placeholder="Phone" />
              <input type="text" className="text-control" placeholder="Email" />
            </div>

            <div className="row">
              <textarea
                name=""
                placeholder="write a Massage"
                className="text-area"
                id=""
              ></textarea>
            </div>
            <div className="row">
              <input type="submit" value="Submit" className="btn" />
            </div>
          </form>
        </div>
      </div>
   <Footer></Footer>
    </>
  );
};

export default Index;
