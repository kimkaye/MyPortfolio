import React from "react";
import ImageCarousel from "./ImageCarousel";
import {
    Link
} from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import kim from '../assets/kimemoji.jpg'
import about from "../assets/about.png";

function Home(props) {
    return (
        <div className="home">
            <div className="welcomeText">
                <div className="about-img">
                    <img src={kim} alt="Logo" className="about-img"/>
                </div>
                <h1 className="welcome">My Resume </h1>
                <button className="homeButton" role="button">
                    <a href="../assets/CV.pdf" download> Download my CV</a>
                </button>
                <br/>
                <h4 className="tech-h4 welcome">My Skills</h4>
                <div className="technologies-icons">
                    <FontAwesomeIcon icon={brands('react')} className="icon"/>
                    <FontAwesomeIcon icon={brands('html5')} className="icon"/>
                    <FontAwesomeIcon icon={brands('css3')} className="icon"/>
                    <FontAwesomeIcon icon={brands('js')} className="icon"/>
                </div>
                <br/>
                <Link to="/about">
                    <button className="homeButton" role="button">More About Me </button>
                </Link>

            </div>
            <ImageCarousel/>
        </div>
    )
}
export default Home;
