import React from 'react'
import './navbar.css'

function Navbar() {
    return (
        <div className="nav">
            <div className="nav_content">
                <div>
                    <h2 className='name'>JOE NEEDHAM</h2>
                </div>
                <div class="nav_links_content">
                    <ul class="nav_link_list">
                        <li><a href="#" class="nav_link active">home</a></li>
                        <li><a class="nav_link">Portfolio</a></li>
                        <li><a class="nav_link">About</a></li>
                        <li><a class="nav_link">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar