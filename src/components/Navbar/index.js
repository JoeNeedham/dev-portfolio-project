import React from 'react'
import './navbar.css'

function Navbar(props) {


    return (
        <div className="nav">
            <div className="nav_content">
                <h2 className='name'><span><i className="fa-brands fa-react react-icon"></i></span>JOE NEEDHAM</h2>
                <div className="nav_links_content">
                    <ul className="nav_link_list">
                        <li><a className="nav_link active">home</a></li>
                        <li><a className="nav_link">About Me</a></li>
                        <li><a className="nav_link">Portfolio</a></li>
                        <li><a className="nav_link">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar