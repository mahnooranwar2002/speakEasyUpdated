import React from 'react'

const Footer = () => {
  return (
    <>
         <footer>
        <div className="container" id="footer">
          <div className="footerbox">
            <h3>SpeakEasy</h3>
          </div>
          <div className="footerbox">
            <span>Services</span>
            <ul>
              <li>
                <a href="">Individual Therapy</a>
              </li>
               <li>
                <a href="">Family Counseling</a>
              </li>
               <li>
                <a href="">Group Therapy</a>
              </li>
               <li>
                <a href="">Child Therapy</a>
              </li>
               <li>
                <a href="">career Counseling</a>
              </li>
            </ul>
          </div>
          <div className="footerbox">
            <span>Company</span>
                     <ul>
              <li>
                <a href="">Home</a>
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
          </div>
          <div className="footerbox">
            <p>Signup our newsletter to get update information, news, insight or promotions.</p>
            <form action="">
              <input type="text" className="input"/>
              <input type="submit" value="Submit" className="btn" />
            </form>
          </div>
          
        </div>
        <div className="container" id="info">
          <p>created by <span>Mahnoor Anwar & Falak Naz</span></p>
        </div>
      </footer>
    </>
  )
}

export default Footer
