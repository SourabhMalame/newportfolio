import React from 'react'
import './Home.css'
import About from '../about/About'
import Skills from '../skills/Skills'
import Contact from '../contact/Contact'
import Testimonials from '../testimonials/Testimonials'
import Footer from '../footer/Footer'
import Hero from '../hero/Hero'

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Skills />

            <Testimonials />
            <Contact />
            <Footer />

        </>
    )
}

export default Home
