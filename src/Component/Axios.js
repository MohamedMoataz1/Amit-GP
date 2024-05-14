import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import "../css/axios.css"
import { NavLink } from 'react-router-dom'
import Loader from './Loader'
import { useDispatch } from 'react-redux'
import { cartslise } from './Redux/cartSlice'
import Swal from "sweetalert2";

const Axios = () => {
    const [products, setProducts] = useState([])
    const [isloading, setisloading] = useState(true);
    const [itemAdded, setItemAdded] = useState([]);
    const dispatch = useDispatch();
    // console.log(products);
    useEffect(() => {
        if (isloading) {
            document.documentElement.classList.add('scrollingoff');
        }
        axios.get("http://127.0.0.1:8000/api/products")
            .then(res => {
                setProducts(res.data.products);
                document.documentElement.classList.remove('scrollingoff');
                console.log(res.data);
                setisloading(false);
            })
            .catch(err => err)
    }, [])
    const handleAddToCart = (el) => {
        dispatch(cartslise.actions.addtocart(el));
        const items = itemAdded;
        items.map((item) => {
            if (item.id == el.id) {
                Swal.fire({
                    title: "Already Added",
                    text: `product ${el.title} is already added to cart`,
                    icon: "info",
                    confirmButtonText: "OK",
                });
            }
        })
        items.push(el);



    }
    return (
        <Fragment>
            {
                isloading ? <Loader /> : null
            }
            <div className='container'>
                {products.map((el, idx) => (
                    <div className='product' key={idx}>
                        {/* <img src={el.thumbnail} alt="" /> */}
                        
                        <h1>{el.pname}</h1>
                        <h3>{el.pprice} LE</h3>
                        <p>{el.pdesc}</p>
                        <NavLink to={`/products/${el.id}`} className='showmorebutton' >Show More</NavLink>
                        <NavLink className='showmorebutton' onClick={() => handleAddToCart(el)}>Add To Cart</NavLink>
                    </div>
                ))}

            </div>
        </Fragment>

    )

}

export default Axios