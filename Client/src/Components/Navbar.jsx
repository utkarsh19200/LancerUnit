import React, { useEffect, useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { UserContext } from "../Routing";
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
    <div
      id="navbar"
      className="flex items-center fixed top-0 w-full h-14 bg-white z-50 transition-all duration-300"
    >
      <div className="flex w-11/12 max-w-screen-xl mx-auto items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" width={70} height={10} loading="lazy" />
        </Link>
        {/* Navigation links */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-16">
            <li>
              <NavLink to="/Home" className="text-black hover:text-blue-500">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/FindJobs" className="text-black hover:text-blue-500">
                Find Jobs
              </NavLink>
            </li>
            <li>
              <NavLink to="/FindFreelancer" className="text-black hover:text-blue-500">
                Find Freelancers
              </NavLink>
            </li>
            <li>
              <a href={props.link} className="text-black hover:text-blue-500" onClick={props.onclick}>
                {props.change}
              </a>
            </li>
          </ul>
        </nav>
        {/* Login / Signup / Dashboard */}
        <div className="hidden md:flex items-center gap-x-4">
          <Link to="/Login">
            <button className="rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-richblack-500">
              Log in
            </button>
          </Link>
          <Link to="/Signup">
            <button className="rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-richblack-500">
              Sign up
            </button>
          </Link>
        </div>
      </div>
      {/* Progress Bar */}
      <div
        style={{ width: `${scrollTop}%` }}
        className="fixed bottom-0 left-0 h-1 bg-blue-500"
      ></div>
    </div>
  );
};

export default Navbar;
