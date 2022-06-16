import { React, useState } from 'react'
import { HomePage } from '../../components'
import { CodingProjects } from '../../components'
import { Navbar } from '../../components'
import classNames from 'classnames'
import './home.css'

function Home() {

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
            <Navbar />
            {/* <HomePage /> */}
            <CodingProjects />
        </div>
    )
}

export default Home