import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import footerstyle from '../css/Footer.module.css'
import whatsapp from '../footer icons/whatsapp.png'
import instagram from '../footer icons/instagram.png'
import Facebook from '../footer icons/Facebook.png'
import message from '../footer icons/message.png'
import rightarrow from '../footer icons/right arrow.png'
const Footer = () => {
    return (
        <Fragment>
            

            <footer className={footerstyle.footer} >
                <div className={footerstyle.details}>
                    <div className={footerstyle.shop}>
                        <h2>SHOP</h2>
                        <ul>
                            <li><NavLink className={footerstyle.samy} to={"/home"} >Home</NavLink></li>
                            <li><NavLink className={footerstyle.samy} to={"/product"}>Product</NavLink></li>
                            <li><NavLink className={footerstyle.samy} to={"/login"}>Login</NavLink></li>
                        </ul>
                    </div>
                    <div className={footerstyle.company}>
                        <h2>Company</h2>
                        <h4>FAQ</h4>
                        <div>
                            <img src={whatsapp} alt="" />
                            <img src={instagram} alt="" />
                            <img src={Facebook} alt="" />
                            <img id={footerstyle.messagephoto} src={message} alt="" />
                        </div>
                    </div>
                    <div className= {footerstyle.joinus} >
                        <h1>Join Us</h1>
                        <div className={footerstyle.input22} >
                            <img src={message} alt="" />
                            <input type="text" placeholder="enter your name" />
                            <img className= {footerstyle.arrow} src={rightarrow} alt="" />
                        </div>
                    </div>
                </div>
            </footer>


        </Fragment>

    )

}

export default Footer