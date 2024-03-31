// Experience.jsx

import React from 'react';
import './Experience.css'

const Experience = () => {
    return (
        <div>
            <h1>Experience</h1>
            <div className="experience-item">
                <h2>Job Title</h2>
                <p>Company Name</p>
                <p>Location</p>
                <p>Start Date - End Date</p>
                <ul>
                    <li>Description of responsibilities and achievements</li>
                    <li>Description of responsibilities and achievements</li>
                    <li>Description of responsibilities and achievements</li>
                </ul>
            </div>
            {/* Add more experience items as needed */}
        </div>
    );
}

export default Experience;
