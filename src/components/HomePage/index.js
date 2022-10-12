import React, { useState } from 'react';
import './homepage.css'
import classNames from "classnames";
import { motion } from 'framer-motion';

function HomePage() {

    const squareVariants = {
        visible: { x: -20, opacity: 1, scale: 1, transition: { duration: 1 } },
        hidden: { x: -1500, opacity: 0, scale: 0 }
    };

    
    return (
        <motion.div
        variants={squareVariants}
        initial='hidden'
        animate='visible'
        transition={{ delay: 1 }}
        className='home-container'
        >
            <div className='home-content'>
                <h1 className='job-title'>SOFTWARE DEVELOPER</h1>
            <div className="attributes">
                <h2 style={{color: "red"}} className='adjectives'>CREATIVE - </h2>
                &nbsp;
                &nbsp;
                <h2 style={{color: "yellow"}} className='adjectives'>DESIGNER - </h2>
                &nbsp;
                &nbsp;
                <h2 style={{color: "rgb(45, 41, 255)"}} className='adjectives'>PROBLEM SOLVER</h2>
            </div>
                {/* <h2 className='adjectives'>CREATIVE - DESIGNER - PROBLEM SOLVER </h2> */}
            </div>
        </motion.div>
    )
    }

export default HomePage