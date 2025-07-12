import React from 'react';
import "../Footer/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import Logo from "../Footer/Footerdata/logo.png";

const Footer = () => {
    return (
        <>


<footer className="footer">
      <div className="footer-grid">
        {/* Column 1 */}
        <div className="footer-col">
          <ul>
            <li>Our Story</li>
            <li>FAQ</li>
            <li>Refund Policy</li>
            <li>Shipping Policy</li>
            <li>Privacy Policy</li>
            <li>Search</li>
            <li>Terms of Service</li>
               <li>
          <a
            href="https://www.instagram.com/ahmad545gujjar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            Instagram
          </a>
        </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <ul>
            <li>Our Promise</li>
            <li>Work With Us</li>
            <li>BRAND PROTECTION</li>
            <li>How do I place order at FITTED?</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Column 3: Signup */}
        <div className="footer-col">
          <h4>SIGN UP AND SAVE</h4>
          <p>
            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
          </p>
          <input type="email" placeholder="Enter your email" />
          <div className="social-icons">

              
          <a
            href="https://www.instagram.com/ahmad545gujjar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-pink-500 transition"
          >
            <span className='instagram'><FontAwesomeIcon icon={faInstagram} size="lg" /></span>
            
          </a>
        
           


            <span><FontAwesomeIcon icon={faFacebook}/></span>
            <span><FontAwesomeIcon icon={faVideo}/></span>
          </div>
        </div>

        {/* Column 4: Brand Info */}
        <div className="footer-col">
          <img src={Logo} alt="Fitted Logo" />
          <p>
            At FITTED, we endeavor to produce the finest clothing pieces...<br />
            Located at Al Hafeez Heights Gulberg 3 Lahore.
          </p>
        </div>
      </div>

      <div className="footer-bottom">© 2025 FITTED</div>
    </footer>
        </>
    );
}

export default Footer;

