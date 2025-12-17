import { React, useEffect } from 'react'
import './Contact.css'

const Contact = () => {

    useEffect(() => {
        document.title = 'BlogVerse | Contact'
    }, [])


    return (
        <>

            <h1>Contact Page</h1>

        </>
    )
}

export default Contact