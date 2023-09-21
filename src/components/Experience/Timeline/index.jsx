import './index.scss'

import React from 'react';

function Timeline() {
  return (
    <div className="timeline">
      <div className="white-dot left">
        <div className="content">
          <h2>Since 2020</h2>
          <p>
          I've been learning Python for numerical 
          methods and image processing with matrices.
          </p>
          <ul>
                <li>Python</li>
                <li>Cv2</li>
            </ul>
        </div>
      </div>
      <div className="white-dot right">
        <div className="content">
          <h2>Since 2021</h2>
          <p>
          I'm learning web development basics (HTML, CSS, JS, SQL) with FreeCodeCamp, focusing on responsive web design and algorithmic structures.
          </p>
          <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>JSON</li>
                    <li>APIs</li>
                    <li>SQL</li>
                </ul>
        </div>
      </div>
      <div className="white-dot left">
        <div className="content">
          <h2>Since 2022</h2>
          <p>
          I participated in a cooperative program at Pow Solution as a Junior Web Developer for four months, gaining experience in Scrum, teamwork (using Clickup), GitHub collaboration, and developing programming skills in MVC, the MERN stack, and more.
          </p>
          <ul>
                    <li>React</li>
                    <li>Express</li>
                    <li>Mongo DB</li>
                    <li>PostgreSQL</li>
                    <li>Node.js</li>
                    <li>Github</li>
                    <li>FPDF</li>
                </ul>
        </div>
      </div>
      <div className="white-dot right">
        <div className="content">
          <h2>2023</h2>
          <p>
          For my RMUTT mathematics bachelor's degree project, I'm developing a web application 
          called 'Better AQI Estimator.' It uses Bilinear Interpolation method to display missing AQI 
          data on a map using AQIcn.org APIs, helping users understand air quality at specific locations.
          </p>
          <ul>
            <li>Latex</li>
            <li>Leaflet.js</li>
            <li>Jest</li>
          </ul>
        </div>
      </div>
      <div className="white-dot left">
        <div className="content">
          <h2>2024</h2>
          <p>
          I would be highly honored if I could participate in writing my experiences in 2024 with your company
          </p>
        </div>
      </div>
    </div>
  );
}

export default Timeline;