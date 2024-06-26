import React, { useEffect, useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { UserContext } from "../Routing";
import styled from "styled-components";
import logo from '../assets/freelancelogobg.png';
/* eslint-disable no-unused-vars */

const Navbar = (props) => {
  const { state, dispatch } = useContext(UserContext);

  //* Login/Logout Functionality
  

  //* Progress bar in navbar on scroll
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 99.9;
    setScrollTop(scrolled);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  //* Navbar sticky on scroll
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("#navbar");
      if (navbar) {
        navbar.classList.toggle("sticky", window.scrollY > 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper navColor="#fff" id="navbar">
      <div
        className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 transition-all duration-200`}
      >
        <div className="flex w-11/12 max-w-maxContent items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" width={70} height={10} loading="lazy" />
          </Link>
          {/* Navigation links */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-4">
              <li>
                <NavLink to="/Home" id="nav-a">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/FindJobs" id="nav-a">
                  Find Jobs
                </NavLink>
              </li>
              <li>
                <NavLink to="/FindFreelancer" id="nav-a">
                  Find Freelancers
                </NavLink>
              </li>
              <li>
                <a href={props.link} id="nav-a" onClick={props.onclick}>
                  {props.change}
                </a>
              </li>
            </ul>
          </nav>
          {/* Login / Signup / Dashboard */}
          <div className="hidden items-center gap-x-4 md:flex">
            <Link to="/Login">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                Log in
              </button>
            </Link>
            <Link to="/Signup">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  #navbar {
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 2;
    transition: 0.6s;
    height: 54px;
    width: 100%;
    top: 0px;
  }

  .Logo {
    display: inline-block;
    height: 2.7rem;
    width: 13rem;
    margin-left: 50px;
    transition: 0.6s;
  }
  #logo:hover {
    transform: scale(1.1);
  }

  #navbar ul {
    display: flex;
    z-index: 2;
    margin: auto;
  }

  #navbar ul li {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    font-size: 1.2rem;
    margin-right: 50px;
  }

  #navbar ul li a {
    position: relative;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    color: ${(props) => props.navColor};
    transition: 0.6s;
  }

  .active {
    color: #1cd6ce !important;
  }

  #navbar ul li a::after {
    content: "";
    position: absolute;
    background-color: ${(props) => props.navColor};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1.5px;
  }

  #navbar ul li a:hover::after {
    transform: scale(1);
    transform-origin: left;
  }

  #ndb {
    margin-right: 50px;
  }

  #navbar button {
    display: inline-block;
    position: relative;
    background: transparent;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 500;
    border-radius: 23px;
    color: ${(props) => props.navColor};
    border: 2px solid ${(props) => props.navColor};
    overflow: hidden;
    cursor: pointer;
    user-select: none;
    transition: all 0.35s;
    width: 82px;
    height: 32px;
  }

  #navbar button:after {
    position: absolute;
    content: "";
    background: var(--accent-color);
    transition: all 0.35s;
    z-index: -1;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
  }

  #navbar button:hover {
    color: ${(props) => props.navColor};
    border: 0px solid var(--accent-color) !important;
    transform: scale(1.05);
  }

  #navbar button:hover:after {
    width: 100%;
  }

  #navbar button a {
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    user-select: none;
    color: ${(props) => props.navColor};
  }

  nav.sticky {
    background-color: #202124;
    opacity: 0.95;
    padding: 5px 50px;
    height: 60px !important;
  }

  nav.sticky .logo {
    background-image: url(https://imgur.com/Q6ijkld);
    display: inline-block;
    height: 2.7rem;
    width: 12rem;
    margin-left: 50px;
    transition: 0.6s;
  }
  nav.sticky #nav-a {
    color: #fff;
  }

  nav.sticky #nav-btn,
  nav.sticky #navbar button:focus {
    color: #fff;
    border: 2px solid #fff;
  }

  nav.sticky #navbar button:hover {
    color: #000000;
    border: 5px solid black;
  }

  nav.sticky #nav-btn-a {
    color: #fff !important;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    user-select: none;
  }

  nav.sticky #nav-a::after {
    content: "";
    position: absolute;
    background-color: #fff;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1.5px;
  }

  nav.sticky #nav-a:hover::after {
    transform: scale(1);
    transform-origin: left;
  }
`;

export default Navbar;
