import { useState } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
        <div className="navbar">
            <div className="nav-components">
                <div className="home">
                    <Link to="/">HOME</Link>
                </div>
                <div className="about-me">
                   <Link to="/about">ABOUT</Link>
                </div>
                <div className="projects">
                    <Link to="/projects">PROJECTS</Link>
                </div>
                <div className="experience">
                    EXPERIENCE
                </div>
                <div className="resume">
                    RESUME
                </div>
                <div className="contact">
                    CONTACT
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar