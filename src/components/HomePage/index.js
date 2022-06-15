import React, { useState } from 'react';
import './homepage.css'
import classNames from "classnames";

function HomePage() {

    const [isClicked, setIsClicked] = useState(false)

    const handleToggle = () => {
        setIsClicked(!isClicked);
    }

    const wrapper = classNames('container', {
        // "bkg-dark": isClicked,
        // "bkg-light": !isClicked,
    });

    return (
        <div className={wrapper}>
            <h1>hello</h1>
        </div>
    )
    }

export default HomePage