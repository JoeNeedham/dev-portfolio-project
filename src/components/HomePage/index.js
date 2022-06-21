import React, { useState } from 'react';
import './homepage.css'
import classNames from "classnames";

function HomePage() {
//commit

    return (
        <div className='home-container'>
            <div className='home-content'>
                <h1 className='job-title'>FRONTEND DEVELOPER</h1>
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
        </div>
    )
    }

export default HomePage