import { useState } from "react";
import './Navbar.css'

function Navbar(){
    return(
        <>
        <div className="navbar">
            <div className="nav-components">
                <div className="home">
                    HOME
                </div>
                <div className="about-me">
                    ABOUT
                </div>
                <div className="projects">
                    PROJECTS
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