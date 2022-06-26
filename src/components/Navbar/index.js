import { React, useState} from 'react'
import './navbar.css'
import classNames from 'classnames';

function Navbar() {

    const homeNav = () => {
        // document.getElementById("aboutme").scrollIntoView();
        window.scrollTo({ top: 0, left: 0, behavior: "smooth"} );
        handleToggle()

    }

    const aboutMeNav = () => {
        // document.getElementById("aboutme").scrollIntoView();
        window.scrollTo({ top: 700, left: 0, behavior: "smooth"} );
        handleToggle()
    }

    const portfolioNav = () => {
        // document.getElementById("aboutme").scrollIntoView();
        window.scrollTo({ top: 1300, left: 0, behavior: "smooth"} );
        handleToggle()

    }

    const contactNav = () => {
        // document.getElementById("aboutme").scrollIntoView();
        window.scrollTo({ top: 2100, left: 0, behavior: "smooth"} );
        handleToggle()
    }


    const [isClicked, setIsClicked] = useState(true);

    const handleToggle = () => {
        if(!isClicked){
            setIsClicked(!isClicked);
        }
        else {
            setIsClicked(isClicked);
        }

    }

    const navLink1 = classNames('nav_link', {

        'nav_link active': isClicked,
        'nav_link': !isClicked
    });

    const navLink2 = classNames('nav_link', {
        'nav_link active': isClicked,
        'nav_link': !isClicked
    });

    const navLink3 = classNames('nav_link', {
        'nav_link active': isClicked,
        'nav_link': !isClicked
    });

    const navLink4 = classNames('nav_link', {
        'nav_link active': isClicked,
        'nav_link': !isClicked
    });



    return (
        <div className="nav">
            <div className="nav_content">
                <h2 className='name'><span><i className="fa-brands fa-react react-icon"></i></span>JOE NEEDHAM</h2>
                <div className="nav_links_content">
                    <ul className="nav_link_list">
                        <li><a onClick={homeNav} className={navLink1} >Home</a></li>
                        <li><a onClick={aboutMeNav} className={navLink1} >About Me</a></li>
                        <li><a onClick={portfolioNav} className={navLink1} >Portfolio</a></li>
                        <li><a onClick={contactNav} className={navLink1}>Contact</a></li>
                    </ul>
                </div>
            </div>
            <div id="aboutme"></div>
        </div>
    )
}

export default Navbar