import React from 'react'
import Header from './AllPages/Header/Header'
import Footer from './AllPages/Footer/Footer'
import { Outlet } from 'react-router'

const Layout = () => {
    return (
        <>

            <Header />

            <Outlet />

            <Footer />

        </>
    )
}

export default Layout