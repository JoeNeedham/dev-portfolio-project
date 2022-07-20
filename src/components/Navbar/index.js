import { React, useState, useRef } from 'react'
import './navbar.css'
import classNames from 'classnames';

function Navbar() {
    console.log(window)

    const { innerWidth: width, innerHeight: height } = window;


    const homeNav = e => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth"} );
        handleToggle()
    }

    const aboutMeNav = () => {
        window.scrollTo({ top: 700, left: 0, behavior: "smooth"} );
        handleToggle()
    }

    const portfolioNav = () => {
        window.scrollTo({ top: 1300, left: 0, behavior: "smooth"} );
        handleToggle()

    }

    const contactNav = () => {
        if (window.innerWidth < 800){
            window.scrollTo({ top: 5000, left: 0, behavior: "smooth"} );
            handleToggle()
        } else {
            window.scrollTo({ top: 2100, left: 0, behavior: "smooth"} );
            handleToggle()
        }
    }


    const [isClicked, setIsClicked] = useState(false);

    const handleToggle = () => {
    
        setIsClicked(false);
    }

    const navLink1 = classNames('nav_link', {

        'nav_link active': isClicked,
        'nav_link': !isClicked
    });



    const navLink = document.querySelector('.nav_link');


    const linkAct = () => {
        console.log(navLink)
        // navLink.forEach(n => n.classList.remove('active'));
        // this.classList.add('active')
        if(navLink.classList=('nav_link active')) {
            navLink.classList.remove('active');
        } else {
            navLink.classList.add('active')
        }
    }

    const handleClick = () => {
        setIsClicked(!isClicked);
    }



    return (
        <div className="nav">
            <div className="nav_content">
                <div onClick={handleClick} className="burger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <h2 className='name'><span><i className="fa-brands fa-react react-icon rotating"></i></span>JOE NEEDHAM</h2>
                <div className="nav_links_content">
                    <ul style={{top: !isClicked ? '-1000px' : '75px'}} className="nav_link_list">
                        <li><a onClick={homeNav} className='nav_link' >Home</a></li>
                        <li><a onClick={aboutMeNav} className='nav_link' >About Me</a></li>
                        <li><a onClick={portfolioNav} className='nav_link' >Portfolio</a></li>
                        <li><a onClick={contactNav} className='nav_link'>Contact</a></li>
                    </ul>
                </div>
            </div>
            <div id="aboutme"></div>
        </div>
    )
}

export default Navbar