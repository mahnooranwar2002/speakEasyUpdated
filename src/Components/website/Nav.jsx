import React from "react";

const Nav = () => {
  return (
    <>
      <header>
        <p>Begin Your Path to Healing with Mindwell. <a href=""> Free Consultations  <i class="ri-arrow-right-line"></i></a></p>
        <div className="container" id="navbar">
       
          <h2>SpeakEasy</h2>
          <nav>
            <ul>
              <li>
                <a href="">home</a>
              </li>
               <li>
                <a href="">About</a>
              </li>
               <li>
                <a href="">Service</a>
                </li>
                 <li>
                <a href="">Contact us</a>
              </li>
             
            </ul>
          </nav>
          <div className="link">
            <i class="ri-facebook-circle-line"></i>
            <i class="ri-instagram-line"></i>
          <i class="ri-linkedin-box-line"></i>
          </div>
        <div className="startedLink">
            <a href="">Get Start</a>
        </div>
         <i class="ri-menu-unfold-4-line menu"></i>
        </div>
      </header>
    </>
  );
};

export default Nav;
