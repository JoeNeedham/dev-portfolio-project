import React from 'react'
import './codingprojects.css'

function CodingProjects() {
    return (
        <div className="projects-container">
            <div className="project-section">
                <div className="section-title">
                    <h1>RECENT PROJECTS</h1>
                </div>
                <div className="projects">
                    <div className="box">
                        {/* <span style={{ color: "white" }}>Portfolio Website</span> */}
                        <video autoPlay muted loop src="media/RIOVIISUALS - 23 June 2022.mp4"></video>
                        <span style={{  margin: "10px 0 10px 10px", color: "white"}}>Portfolio Website</span>
                    </div>
                    <div className="box">
                        <video autoPlay muted loop src="media/Netflix - 23 June 2022.mp4"></video>
                        <span style={{  margin: "10px 0 10px 10px", color: "white"}}>Netflix Clone</span>
                    </div>
                    <div className="box">
                        <video autoPlay muted loop src="media/Anime Watch List - 23 June 2022.mp4"></video>
                        <span className='video-title' style={{ margin: "10px 0 10px 10px",color: "white"}}>Anime Watch List</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CodingProjects