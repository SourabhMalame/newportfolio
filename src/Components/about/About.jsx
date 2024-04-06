// About.jsx

import React from 'react';
import './About.css'; // Import your CSS file

const About = () => {
    return (
        <section id="AboutMe" className="about--section">
            <div className="about--section--img">
                <img src="./img/man.jpg" alt="About Me" />
            </div>
            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                    <p className="section--title">About</p>
                    <h1 className="skills-section--heading">About Me</h1>
                    <p className="hero--section-description">
                        Outside of my professional endeavors, I have a diverse range of interests that fuel my curiosity and creativity. Whether it's delving into the latest developments in technology, exploring new cultures through travel, or immersing myself in the arts, I constantly seek out opportunities to broaden my horizons and expand my perspective.
                    </p>
                    <p className="hero--section-description">
                        I believe in the power of personal development and lifelong learning, and I am always eager to take on new challenges and push myself to new heights. With a strong work ethic, a thirst for knowledge, and a genuine enthusiasm for what I do, I am committed to making a positive impact both personally and professionally.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;


