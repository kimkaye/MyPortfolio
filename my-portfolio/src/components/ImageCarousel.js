import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import project1 from '../assets/cookaye.png'
import project2 from '../assets/emilyBakery.png'
import project3 from '../assets/pizzamia.png'
import react from '../assets/react.jpg'
import React from "react";

function ImageCarousel() {
    return (
        <div className="ImageCarousel">
            <h1 className="welcome">My Projects </h1>
            <Carousel showArrows={true}>
                <div>
                    <h6>Cookaye</h6>
                    <img src={project1} />
                    <br/>
                </div>
                <div>
                    <h6>Emily Bakery</h6>
                    <img src={project2} />
                    <br/>
                </div>
                <div>
                    <h6>Pizza Mia</h6>
                    <img src={project3} />
                    <br/>
                </div>
            </Carousel>
        </div>

    );
}

export default ImageCarousel;

