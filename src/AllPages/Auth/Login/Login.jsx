import React from 'react'
import './Login.css'
import { Link } from 'react-router'

const Login = () => {
    return (
        <div>

            <h1 className='text-2xl'>
                Login Page
            </h1>

            <Link to='register' >
                Register
            </Link>

        </div>
    )
}

export default Login