import React, { useEffect, useRef } from 'react';
import './Navbar.css';
import bell_icon from '../../assets/bell_icon.svg';
import Logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import profile_icon from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';

function Navbar() {
  const navReff = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navReff.current.classList.add('nav-dark');
      } else {
        navReff.current.classList.remove('nav-dark');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={navReff} className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="Logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="Search" className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="Notifications" className="icons" />
        <div className="navbar-profile">
          <img src={profile_icon} alt="Profile" className="profile" />
          <img src={caret_icon} alt="Caret" className="icons" />
          <div className="dropdown">
            <p>Sign Out Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
