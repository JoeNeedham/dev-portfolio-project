import React, { useState } from 'react';
import './homepage.css'
import classNames from "classnames";

function HomePage() {

    const conditionalStyles = classNames('container', {
        "bkg-dark": isClicked,
        "bkg-light": !isClicked
    });
    return (
        <div className={conditionalStyles}>
            <h1>hello</h1>
        </div>
    )
    }

export default HomePage