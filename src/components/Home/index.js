import { React, useState, useRef } from 'react'
import { AboutMe, HomePage, ContactMe, CodingProjects} from '../../components'
import { Navbar } from '../../components'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import classNames from 'classnames'
import './home.css'

function Home() {

    const [isClicked, setIsClicked] = useState(false)

    // const aboutMeRef = useRef()

    // const handleClick = () => {
    //     console.log("working")
    //     console.log(aboutMeRef)

    //     aboutMeRef.current.scrollIntoView({ behavior: 'smooth' })
    // }

    const handleToggle = () => {
        setIsClicked(!isClicked);
    }

    const wrapper = classNames('container', {
        // "bkg-dark": isClicked,
        // "bkg-light": !isClicked,
    });

    const onClickHandler = () => {
        document.getElementById("aboutme").scrollIntoView();
    }


    return (
        <div className={wrapper}>
            <Navbar onclickhandler={onClickHandler} />
            <HomePage />
            <section id="aboutme">
            </section>
            <AboutMe />
            <CodingProjects />
            <ContactMe />
        </div>
    )
}

export default Home