import React from 'react'
import Products from '../Component/Products'
import Navbar from '../Component/Navbar'
import Axios from '../Component/Axios'
import Footer from '../Component/Footer.js'
import Loader from '../Component/Loader.js'
import AxiosAdmin from '../Component/AxiosAdmin.js'
const Product = () => {
  const user = localStorage.getItem('user');
  return (
    <div>
        <Navbar/>
        {user != "admin@admin.com" ? <Axios/> : <AxiosAdmin/> }
        
        <Footer/>
        
      
    </div>
  )
}

export default Product