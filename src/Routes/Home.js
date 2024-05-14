import React, { Fragment, useEffect } from 'react'
import HomeComponent from '../Component/HomeComponent'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Loader from '../Component/Loader'
const Home = () => {
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const yOffset = window.pageYOffset;
    //         console.log("Y-axis position:", yOffset);
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    return (
        <Fragment>
            <Navbar />
            <HomeComponent />
            <Footer />
        </Fragment>
    )
}

export default Home