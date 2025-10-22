import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo.png'; // Make sure this path is correct

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10 mt-10 sm:flex sm:justify-between">
      <aside>
        <img src={logo} alt="SkillSwap Logo" className="h-14 w-auto" />
        <p>
          <strong>SkillSwap Ltd.</strong><br/>
          Connecting learners and teachers locally since 2025.
        </p>
      </aside> 
      
      <nav>
        <h6 className="footer-title">Contact Info</h6> 
        <a className="link link-hover">123 Learning Lane, Dhaka</a>
        <a className="link link-hover">info@skillswap.com</a>
        <a className="link link-hover">+880 123 456 7890</a>
      </nav> 
      
      <nav>
        <h6 className="footer-title">Legal</h6> 
        <Link to="/privacy-policy" className="link link-hover">Privacy policy</Link> 
        <Link to="/terms-of-use" className="link link-hover">Terms of use</Link> 
      </nav> 
      
      <nav>
        <h6 className="footer-title">Social</h6> 
        <div className="grid grid-flow-col gap-4 text-2xl">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="link link-hover">
            <FaTwitter />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="link link-hover">
            <FaYoutube />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="link link-hover">
            <FaFacebook />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;