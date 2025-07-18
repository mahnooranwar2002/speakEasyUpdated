import React from "react";
import { Link } from "react-router-dom";

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
               
                <Link to={"/"}>Home</Link>
              </li>
               <li>
               
                  <Link to={"/about"}>About</Link>
              </li>
               <li>
              
                   <Link to={"/service"}>Services</Link>
                </li>
                 <li>
                <Link to={"/contact"}>Contact</Link>
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
