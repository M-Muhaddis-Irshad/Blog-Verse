import { React, useEffect } from 'react'
import './About.css'

const About = () => {

    useEffect(() => {
        document.title = 'BlogVerse | About';
    }, [])


    return (
        <>

            <div className='parent'>

                <h1 className='text-7xl'>About Page</h1>

            </div>

        </>

    )
}

export default About