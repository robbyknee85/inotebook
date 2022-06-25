import React from "react";
import {NavLink} from "react-router-dom";



export default function Navbar() {
  const toggleNav = () => {
    const nav = document.querySelector('.nav-menu');
    const navMenu = document.querySelector('.menu-bar');
    if( nav.classList.contains('open') ) {
      nav.classList.remove('open');
      navMenu.classList.remove('menu-active');
    }
    else{
      nav.classList.add('open');
      navMenu.classList.add('menu-active');
    }
  }
  
  return (
    <div className="navBar">
      <div className="nav-wrapper p-4 d-flex justify-content-between">
        <NavLink to={"/"} className="navbar-brand d-flex align-items-center">
          in<span>o</span>
          <span>o</span>tb<span>o</span>
          <span>o</span>k
        </NavLink>
        <div className="menu-bar" onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="nav-menu">
          {/* <nav className="nav">
            <NavLink className="nav-link" to={"/"}>
              Home
            </NavLink>
            <NavLink className="nav-link" to={"/about"}>
              About
            </NavLink>
            <a className="nav-link" href="/">
              Contact Us
            </a>
          </nav>
          <div className="btns">
          <a href="/login" type="button" className="btn btn-primary mx-2">
            Register
          </a>
          <a href="/reg" type="button" className="btn btn-primary mx-2">
            LogIn
          </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

