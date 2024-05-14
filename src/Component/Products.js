import React, { Fragment } from 'react'
import SingleProduct from './SingleProduct'
import image1 from "../images/download (1).jpeg"
import image2 from "../images/download (2).jpeg"
import image3 from "../images/images (1).jpeg"
const Products = () => {
  return (
    <div className='products'>
        <SingleProduct sora={image1} productname={"3amy "} productdescription={"3amyy a5o aboya"}/>
        <SingleProduct sora={image2} productname={"5aly "} productdescription={"5aly a5oo oomy"}/>
        <SingleProduct sora={image3} productname={"a5oia elkber"} productdescription={"wad7a de msh m7taga"}/>

    </div>
  )
}

export default Products