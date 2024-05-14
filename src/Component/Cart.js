import React, { Fragment } from 'react'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import cartcss from '../css/cart.module.css';
import Swal from 'sweetalert2';
const Cart = () => {
  const cart = useSelector(state => state.cart.cart);
  const total = useSelector(state => state.cart.total);
  const items = useSelector(state => state.cart.items);
  const token = localStorage.getItem('token');
  console.log(items);
  const handleCheckOut = () => {
    if (token) {
      Swal.fire({
        title: "Checking out Done",
        text: `your order on his way to you`,
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        window.location.href = "/product";
      })
        ;

    } else {
      Swal.fire({
        title: "cant check out",
        text: `you have to be logged in`,
        icon: "failed",
        confirmButtonText: "Login",
      }).then(() => {
        window.location.href = "/login";
      })
        ;
    }
  }
  return (
    // useSelector
    <Fragment>
      <Navbar />
      {/* {cart.map(el => el.title)} */}
      <div className={cartcss.containerdiv}>
        <h1>Shooping Cart</h1>
        <p>you have {items} items in your Cart</p>
        {
          cart.map((el, idx) => (

            <div className={cartcss.productcart} key={idx}>
              {/* <img src={el.thumbnail} alt="" /> */}
              <h3>{el.pname}</h3>
              <h3>{el.pdesc}</h3>
              <p>{el.pprice} LE </p>

            </div>
          ))
        }


        {total > 0 ? <h3>Total Price is : {total} LE </h3> : null}
        {total > 0 ? <button onClick={() => handleCheckOut()}>Check Out </button> : null}
      </div>

    </Fragment>
  )
}

export default Cart