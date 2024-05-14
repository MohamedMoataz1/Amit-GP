import React, { useEffect, useState, Fragment } from 'react'
import leopeps from "../images/download (1).jpeg"
import arabic from "../images/egypt flag.webp"
import america from "../images/america flag.webp"
import { Link, NavLink } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa";
import yellowcart from '../images/yellow cart.jpg';
import { IoMenuSharp } from "react-icons/io5";
import phonecss from '../css/menuphone.module.css';
const MenuPhone = () => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    const handleLogOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = "/home";

    }
    return (
        <Fragment>
            <div className={phonecss.menuphonecontainer} >

                {
                    user == "admin@admin.com" ? <ol>

                        <li><NavLink className={phonecss.samy} to={"/home"} >Home</NavLink></li>
                        <li><NavLink className={phonecss.samy} to={"/product"}>Products</NavLink></li>
                        <li><NavLink className='samy' to={"/addproduct"}>Add Product</NavLink></li>

                        <li onClick={() => handleLogOut()} className='samy' >Logout</li>
                        <li>

                            <div className={phonecss.chooselanguage} >
                                <div>

                                    <h6>Language | اللغة</h6>
                                </div>
                                <div className={phonecss.twoimage}  >

                                    <img src={arabic} alt="" />
                                    <img src={america} alt="" />
                                </div>
                            </div>
                        </li>
                    </ol>
                        : !token ?
                            <ol>

                                <li><NavLink className={phonecss.samy} to={"/home"} >Home</NavLink></li>
                                <li><NavLink className={phonecss.samy} to={"/product"}>Products</NavLink></li>

                                <li><NavLink className={phonecss.samy} to={"/contact"}> contact</NavLink></li>
                                <li><NavLink className={phonecss.samy} to={"/login"}>Login</NavLink></li>
                                <li><NavLink className={phonecss.samy} to={"/Register"}>Register</NavLink></li>
                                <li> <NavLink className={phonecss.samy} to={"/cart"}> <FaCartPlus /> </NavLink>  </li>
                                <li>

                                    <div className={phonecss.chooselanguage} >
                                        <div>

                                            <h6>Language | اللغة</h6>
                                        </div>
                                        <div className={phonecss.twoimage}  >

                                            <img src={arabic} alt="" />
                                            <img src={america} alt="" />
                                        </div>
                                    </div>
                                </li>
                            </ol>
                            :
                            <ol>

                                <li><NavLink className={phonecss.samy} to={"/home"} >Home</NavLink></li>
                                <li><NavLink className={phonecss.samy} to={"/product"}>Products</NavLink></li>

                                <li><NavLink className={phonecss.samy} to={"/contact"}> contact</NavLink></li>
                                <li> <NavLink className={phonecss.samy} to={"/cart"}> <FaCartPlus /> </NavLink>  </li>
                                <li onClick={() => handleLogOut()} className='samy' >Logout</li>
                                <li>

                                    <div className={phonecss.chooselanguage} >
                                        <div>

                                            <h6>Language | اللغة</h6>
                                        </div>
                                        <div className={phonecss.twoimage}  >

                                            <img src={arabic} alt="" />
                                            <img src={america} alt="" />
                                        </div>
                                    </div>
                                </li>
                            </ol>

                }
            </div>
        </Fragment>

    )
}

export default MenuPhone