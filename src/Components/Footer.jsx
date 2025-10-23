import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer bg-[#4B2E2E] text-[#FFE8B0] p-10 mt-10 sm:flex sm:justify-between">
      <aside>
        <img src={logo} alt="SkillSwap Logo" className="h-14 w-auto" />
        <p className="text-sm">
          <strong className="text-[#FF7F3F]">SkillSwap Ltd.</strong><br/>
          Connecting learners and teachers locally since 2025.
        </p>
      </aside> 
      
      <nav>
        <h6 className="footer-title text-[#FF7F3F]">Contact Info</h6> 
        <a className="link link-hover hover:text-[#FF7F3F]">123 Learning Lane, Dhaka</a>
        <a className="link link-hover hover:text-[#FF7F3F]">info@skillswap.com</a>
        <a className="link link-hover hover:text-[#FF7F3F]">+880 123 456 7890</a>
      </nav> 
      
      <nav>
        <h6 className="footer-title text-[#FF7F3F]">Legal</h6> 
        <Link to="/privacy-policy" className="link link-hover hover:text-[#FF7F3F]">Privacy policy</Link> 
        <Link to="/terms-of-use" className="link link-hover hover:text-[#FF7F3F]">Terms of use</Link> 
      </nav> 
      
      <nav>
        <h6 className="footer-title text-[#FF7F3F]">Social</h6> 
        <div className="grid grid-flow-col gap-4 text-2xl">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF7F3F]">
            <FaTwitter />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF7F3F]">
            <FaYoutube />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF7F3F]">
            <FaFacebook />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
