import './index.scss'

import React from 'react';

function Timeline() {
  return (
    <div className="timeline">
      <div className="white-dot left">
        <div className="content">
          <h2>2020</h2>
          <p>
          I've learned Python for numerical methods and image processing with matrices and gained Knowledge involved in the technologies below
          </p>
          <ul>
                <li>Python (fair)</li>
                <li>Cv2 (little)</li>
            </ul>
        </div>
      </div>
      <div className="white-dot right">
        <div className="content">
          <h2>2021</h2>
          <p>
          I'm learning web development basics with FreeCodeCamp, focusing on responsive web design and algorithm structures, and gained Knowledge involved in the technologies below
          </p>
          <ul>
              <li>HTML/CSS (fair)</li>
              <li>JavaScript (fair)</li>
              <li>TypeScript (fair)</li>
              <li>JSON (experience)</li>
              <li>Restful APIs (fair)</li>
              <li>SQL (fair)</li>
                </ul>
        </div>
      </div>
      <div className="white-dot left">
        <div className="content">
          <h2>Since 2022</h2>
          <p>
          I participated in a cooperative program at Pow Solution as a Junior Web Developer for 4 months, During this period, I gained experience in Scrum methodologies and collaboration using GitHub. I also honed my programming skills, with a focus on the MVC framework and the MERN stack. Gained Knowledge involved in the technologies below 
          </p>
          <ul>
                    <li>React (fair)</li>
                    <li>Express (fair)</li>
                    <li>Mongo DB (fair)</li>
                    <li>Node.js (fair)</li>
                    <li>Github (experience)</li>
                    <li>Scrum methodologies</li>
                    <li>PHP (fair)</li>
                </ul>
        </div>
      </div>
      <div className="white-dot right">
        <div className="content">
          <h2>2023</h2>
          <p>
          I applied mathematics with a web application by creating a project called 'Better Air Quality Index Estimator (Better AQI Estimator)' It uses the Bilinear Interpolation method to display missing AQI data on a map, helping users understand air quality at specific locations.
          </p>
          <ul>
            <li>Latex (experience)</li>
            <li>Leaflet.js (fair)</li>
            <li>Jest (fair)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Timeline;