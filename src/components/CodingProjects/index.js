import { React, useEffect} from 'react'
import './codingprojects.css'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function CodingProjects() {

    const squareVariants = {
        visible: { x: 0, opacity: 1, scale: 1, transition: { duration: 1 } },
        hidden: { x: 0, opacity: 0, scale: 0 }
    };
    
    const controls = useAnimation();

    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
        controls.start("visible");
        }
    }, [controls, inView]);

    
    return (
        <motion.div
        className="projects-container"
        ref={ref}
        variants={squareVariants}
        initial='hidden'
        animate={controls}
        transition={{ delay: 1 }}
        >
            <div className="project-section">
                <div className="section-title">
                    <h1>RECENT PROJECTS</h1>
                </div>
                <div className="projects">
                <p>Please enlarge screen</p>
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
        </motion.div>
    )
}

export default CodingProjects