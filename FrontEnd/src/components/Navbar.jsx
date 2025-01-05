// import React from "react";



const Navbar = () => {

  return (
    <div className="navbar">
      <div className="portfolioLogo">
        <img src="./Profile Logo/pngegg.png" className="logo" />
      </div>

      <div className="navbarLists">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#educations">Education</a></li>
          <li><a href="#acheivements">Achievements</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar