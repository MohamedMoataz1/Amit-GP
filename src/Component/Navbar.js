import React, { Fragment, useEffect, useState } from 'react'
import leopeps from "../images/download (1).jpeg"
import arabic from "../images/egypt flag.webp"
import america from "../images/america flag.webp"
import { Link, NavLink } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa";
import yellowcart from '../images/yellow cart.jpg';
import { IoMenuSharp } from "react-icons/io5";
import MenuPhone from './MenuPhone'
import { useSelector } from 'react-redux'
const Navbar = () => {
    const [temp, setemp] = useState(false);
    const [showmenu, setshowmenu] = useState(false);
    const items = useSelector(state => state.cart.items);

    const handleshowmenu = () => {
        setshowmenu(!showmenu);
        console.log("insid");
    }

    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (token) {

        console.log('Token exists:', token);
    } else {

        console.log('Token does not exist');
    }
    const handleLogOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = "/home";

    }

    return (
        <Fragment>

            {
                !token ?
                    <nav>
                        <div className='nav-container'>
                            <Link to={"/home"}>
                                <img src={yellowcart} alt="" />
                            </Link>
                            <ul>

                                <li><NavLink className='samy' to={"/home"} >Home</NavLink></li>
                                <li><NavLink className='samy' to={"/product"}>Products</NavLink></li>
                                {/* <li><NavLink className='samy' to={"/about"}> About</NavLink></li> */}
                                <li><NavLink className='samy' to={"/contact"}> contact</NavLink></li>
                                <li><NavLink className='samy' to={"/login"}>Login</NavLink></li>
                                <li><NavLink className='samy' to={"/Register"}>Register</NavLink></li>

                                <li> <NavLink className='samy' to={"/cart"}>
                                    <FaCartPlus />
                                    {items > 0 ? <h3>{items}</h3> : null}
                                </NavLink>  </li>
                                <li>

                                    <div className='choose-language'>
                                        <div>

                                            <h6>Language | اللغة</h6>
                                        </div>
                                        <div className='two-image'>

                                            <img src={arabic} alt="" />
                                            <img src={america} alt="" />
                                        </div>
                                    </div>
                                </li>
                                <li className='menubutton'>
                                    <IoMenuSharp onClick={() => handleshowmenu()} />
                                </li>


                            </ul>
                        </div>
                        {showmenu && <MenuPhone />}
                    </nav> :
                    user == "admin@admin.com" ?

                        <nav>
                            <div className='nav-container'>
                                <Link to={"/home"}>
                                    <img src={yellowcart} alt="" />
                                </Link>
                                <ul>

                                    <li><NavLink className='samy' to={"/home"} >Home</NavLink></li>
                                    <li><NavLink className='samy' to={"/product"}>Products</NavLink></li>
                                    <li><NavLink className='samy' to={"/addproduct"}>Add Product</NavLink></li>

                                    {/* <li><NavLink className='samy' to={"/about"}> About</NavLink></li> */}

                                    <li onClick={() => handleLogOut()} className='samy' >Logout</li>

                                    {/* <li>
                                    <NavLink className='samy' to={"/cart"}>
                                        <FaCartPlus />
                                        {items > 0 ? <h3>{items}</h3> : null}
                                    </NavLink>
                                </li> */}

                                    <li>

                                        <div className='choose-language'>
                                            <div>

                                                <h6>Language | اللغة</h6>
                                            </div>
                                            <div className='two-image'>

                                                <img src={arabic} alt="" />
                                                <img src={america} alt="" />
                                            </div>
                                        </div>
                                    </li>
                                    <li className='menubutton'>
                                        <IoMenuSharp onClick={() => handleshowmenu()} />
                                    </li>


                                </ul>
                            </div>
                            {showmenu && <MenuPhone />}
                        </nav> :
                        <nav>
                            <div className='nav-container'>
                                <Link to={"/home"}>
                                    <img src={yellowcart} alt="" />
                                </Link>
                                <ul>

                                    <li><NavLink className='samy' to={"/home"} >Home</NavLink></li>
                                    <li><NavLink className='samy' to={"/product"}>Products</NavLink></li>


                                    {/* <li><NavLink className='samy' to={"/about"}> About</NavLink></li> */}

                                    <li onClick={() => handleLogOut()} className='samy' >Logout</li>

                                    <li>
                                        <NavLink className='samy' to={"/cart"}>
                                            <FaCartPlus />
                                            {items > 0 ? <h3>{items}</h3> : null}
                                        </NavLink>
                                    </li>

                                    <li>

                                        <div className='choose-language'>
                                            <div>

                                                <h6>Language | اللغة</h6>
                                            </div>
                                            <div className='two-image'>

                                                <img src={arabic} alt="" />
                                                <img src={america} alt="" />
                                            </div>
                                        </div>
                                    </li>
                                    <li className='menubutton'>
                                        <IoMenuSharp onClick={() => handleshowmenu()} />
                                    </li>


                                </ul>
                            </div>
                            {showmenu && <MenuPhone />}
                        </nav>
            }

        </Fragment>
    )
}

export default Navbar