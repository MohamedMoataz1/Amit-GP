import React from 'react'
import Loader from './Loader'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Slogan = () => {
    const logged = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    console.log(user);
    return (
        <div className='slogan'>
            <h1>E-commerece</h1>
            {
                user!='admin@admin.com' ? <NavLink className='shopnow' to={"/product"}>Shop Now</NavLink> : null
            }

           
            

        </div>
    )
}

export default Slogan