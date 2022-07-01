import { React, useEffect} from 'react'
import './aboutme.css'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AboutMe() {

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
        ref={ref}
        variants={squareVariants}
        initial='hidden'
        animate={controls}
        transition={{ delay: 1 }}
        className='about-container'>
            <div className="about-section">
                <div
                ref={ref}
                className="about-title"
                variants={squareVariants}
                initial='hidden'
                animate={controls}
                transition={{ delay: 1 }}
                >
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
                        <p>Please enlarge screen</p>
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
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
    }

export default AboutMe