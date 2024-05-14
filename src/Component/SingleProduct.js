import React from 'react'
// import image1 from '../images/3amy.jpeg'

const SingleProduct = ({sora,productname,productdescription}) => {
  return (
    <div className='single-product'>
        <img src={sora} alt="" />
        <h1>{productname}</h1>
        <p>{productdescription}  </p>
        <button>Read More</button>

    </div>
  )
}

export default SingleProduct