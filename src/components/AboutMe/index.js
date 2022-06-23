import React from 'react'
import './aboutme.css'

function AboutMe() {
    return (
        <div className='about-container'>
            <div className="about-section">
                <div className="about-title">
                    <h1>HEY, I'M JOE!</h1>
                </div>
                <div className="about-content">
                    <h2>Education - Central Michigan University (Winter 2017), Coding Dojo (Fall 2021)</h2>
                    <br />
                    <br />
                    <h2>Interested In - Web Design, UX, and CSS</h2>
                    <br />
                    <br />
                    <h2>Currently Learning - TypeScript, Sass, and Figma</h2>
                    
                    <div className="about-tech">
                        <h2>Some Technologies Used</h2>
                        <div className="tech-pictures">
                            <div className='tech-box'>
                                <img src="images/react.png" alt="" />
                                <p>REACT</p>
                            </div>
                            <div className='tech-box'>
                                <img src="images/redux.png" alt="" />
                                <p>REDUX</p>
                            </div>
                            <div className='tech-box'>
                                <img src="images/node.png" alt="" />
                                <p>NODE.JS</p>
                            </div>
                            <div className='tech-box'>
                                <img src="images/mongoDB.png" alt="" />
                                <p>MongoDB</p>
                            </div>
                            {/* commit */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }

export default AboutMe