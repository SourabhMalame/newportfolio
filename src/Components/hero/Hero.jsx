import React from 'react'

const Hero = () => {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Sourabh Malame</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Full Stack Developer And Digital Marketer</span>
                    </h1>
                    <p className="hero--section-description">
                        Combining my expertise as a seasoned full-stack developer with a solid foundation in digital marketing, I possess a unique skill set poised to drive innovative solutions and impactful digital strategies in today's dynamic tech industry.
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/home1.jpg" alt="Hero Section" />
            </div>
        </section>
    )
}

export default Hero
