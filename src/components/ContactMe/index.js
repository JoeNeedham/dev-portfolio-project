import React from 'react'
import './contactme.css'

function ContactMe() {
    return (
        <div className='contact-container'>
            <div className="contact-section">
                <div className="contact-title">
                    <h1>LET'S KEEP IN TOUCH!</h1>
                </div>
                <div className="contact-content">
                    <h2>Email - Joeneedum@gmail.com</h2>
                    <br />
                    <br />
                    <br />
                    <h2>LinkedIn - <a href="https://www.linkedin.com/in/joe-needham-434919139/"><i style={{ border:"1px solid white", padding: "10px", color: "rgb(50, 100, 700)"}} className="fa-brands fa-linkedin-in"></i></a></h2>
                    <br />
                    <br />
                    <br />
                    <h2>Github - <a href="https://github.com/JoeNeedham"><i style={{ border:"1px solid white", padding: "10px", color: "black"}} className="fa-brands fa-github"></i></a>  <span style={{ fontSize: '12px'}}> Check out my 2022 contributions!</span></h2>
                    <br />
                    <br />
                    <br />
                    <h2>Twitter - <a href="https://twitter.com/CodeNeedham"><i style={{ border:"1px solid white", padding: "10px", color: "rgb(30, 150, 500)"}} className="fa-brands fa-twitter"></i></a></h2> 
                </div>
            </div>
        </div>
    )
}

export default ContactMe