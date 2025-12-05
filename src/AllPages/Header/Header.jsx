import { useEffect, useState } from "react";
import "./Header.css";
import { Route, Routes } from "react-router";
import { About } from "../About/About";
// import {Logo} from "../../../public/Logo_Fav_Icon/withClr/whiteBgCropped.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(true);
  const [portalSvg, setPortalSvg] = useState("");

  // Scroll handler (adds scrlStart class)
  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle handler
  const toggleMenu = () => {
    setOpen((prev) => !prev);

    // Lock/unlock body scroll
    document.body.classList.toggle("active");

    // Scroll to top when opening
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Fetch Portal SVG
  useEffect(() => {
    fetch("/Logo_Icons/icons/Portal.svg")
      .then((res) => res.text())
      .then((svg) => setPortalSvg(svg));
  }, []);



  <Routes>

    <Route path="about" element={<About/>} />

  </Routes>
  
  
  return (
    <header className={`navBar ${!scrollTop ? "scrlStart" : ""} ${open ? "active" : ""}`}>
      <div className="logoContainer">
        {/* <a href="/">
          <img
            src="/Logo_Icons/RemovedBg/croped.png"
            alt="CareNest Logo"
            className="Logo"
          />
        </a> */}

        <a href="/" title="BlogVerse">
          {/* <img src='../../../public/Logo_Fav_Icon/cropedLogo_Bg_Removed/bg_Removed.png' alt="BlogVerse Logo" className="Logo" /> */}
          <img src='../../../public/Logo_Fav_Icon/cropedLogo_Bg_Removed/bg_Removed.png' alt="BlogVerse Logo" className="Logo" />

          <h3 className="logoHeading">
            BlogVerse
          </h3>
        </a>

        {/* <h3 className="logoHeading">CareNest</h3> */}
      </div>

      <div
        className={`navbarToggler ${open ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className={`bar bar1 ${open ? "active" : ""}`}></span>
        <span className={`bar bar2 ${open ? "active" : ""}`}></span>
        <span className={`bar bar3 ${open ? "active" : ""}`}></span>
      </div>

      <div className={`navLinksContainer ${open ? "active" : ""}`}>
        <a className="navLinks" href="/">Home</a>
        <a className="navLinks" href="/allPages/appointment/appointment.html">About</a>
        <a className="navLinks" href="/allPages/bookings/myBookings.html">Contact Us</a>

        <span id="loginBtn">
          <a className="navLinks lastLink" href="/allPages/auth/login/login.html">
            Login <span className="portal" dangerouslySetInnerHTML={{ __html: portalSvg }} />
          </a>
        </span>
      </div>
    </header>
  );
}

export default Header















































































































// import React from 'react'
// import './Header.css'
// import { logo } from "../../../public/Logo_Fav_Icon/originalLogo/image.webp";
// const Header = () => {



//   {// NavBar toggling__________________________________________

//   const navContainer = document.getElementById('navContainer');
//   const toggleBar = document.getElementById('toggleBar');
//   const navLinksContainer = document.getElementById('navLinksContainer');
//   const bars = document.querySelectorAll('.bar');
//   // Check if scrollbar is on top of the window or not__________________
//   {
//     window.addEventListener("scroll", () => {
//       const scroll = this.scrollY;
//       // Use ternary operators for check the condition__________________________
//       (scroll === 0) ? navContainer.classList.remove('scrlStart') : navContainer.classList.add('scrlStart')
//     });
//   }
//   // Add EventListener on ToggleBar__________________
//   {
//     toggleBar.addEventListener('click', () => {
//       navContainer.classList.toggle('active');
//       toggleBar.classList.toggle('active');
//       navLinksContainer.classList.toggle('active');
//       bars.forEach(obj => obj.classList.toggle('active'))
//       document.body.classList.toggle('active')
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     })
//   }

//   // Portal Svg____________________________________________________

//   fetch("../../../Logo_Icons/icons/Portal.svg")
//     .then(res => res.text())
//     .then(data => {
//       document.querySelector(".portal").innerHTML = data;
//     });

// }




//   return (

//     <header className="navBar" id="navContainer">

//       <div className="logoContainer">

//         <a href="/" title="BlogVerse">
//           <img src="../../../public/Logo_Fav_Icon/originalLogo/image.webp" alt="BlogVerse Logo" className="Logo" />

//           <h3 className="logoHeading">
//             CareNest
//           </h3>
//         </a>

//       </div>

//       <div className="navbarToggler" id="toggleBar">
//         <span className="bar bar1"></span>
//         <span className="bar bar2"></span>
//         <span className="bar bar3"></span>
//       </div>

//       <div className="navLinksContainer" id="navLinksContainer">

//         <a className="navLinks" href="index.html">Home</a>
//         <a className="navLinks" href="allPages/appointment/appointment.html">Appointment</a>
//         <a className="navLinks" href="allPages/bookings/myBookings.html">My Bookings</a>

//         <span id="loginBtn">
//           <a className="navLinks lastLink" href="allPages/auth/login/login.html"> Login <svg className="portal"></svg>
//           </a>
//         </span>

//       </div>

//     </header>

//   )
// }

// export default Header