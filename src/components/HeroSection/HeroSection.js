import React from 'react';
import { Button } from '../Button/Button';
import './HeroSection.css';
import video1 from './../videos/video-2.mp4'

const HeroSection = () => {
    return (
        <div className="hero-container">
            <video src={video1} autoPlay loop muted /> 
            <h1>ADVANTURE AWITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    GET STARTED
                </Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                    WATCHED <i className="far fa-play-circle" />
                </Button>
            </div>
        </div>
    );
};

export default HeroSection;