import { React, useState, useRef } from 'react'
import { AboutMe, HomePage, ContactMe, CodingProjects} from '../../components'
import { Navbar } from '../../components'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import classNames from 'classnames'
import './home.css'

function Home() {

    const [isClicked, setIsClicked] = useState(false);

    const handleToggle = () => {
        setIsClicked(!isClicked);
    }

    const wrapper = classNames('container', {
        // "bkg-dark": isClicked,
        // "bkg-light": !isClicked,
    });

    window.onbeforeunload = function () {
        window.scrollTo({
            top: 0,
            left: 0,
            // behavior: 'smooth'
        });
    };

    return (
        <div className={wrapper}>
            <Navbar />
            <HomePage />
            <AboutMe />
            <CodingProjects />
            <ContactMe />
        </div>
    )
}

export default Home