import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import "../css/axios.css"
import { NavLink } from 'react-router-dom'
import Loader from './Loader'
import { useDispatch } from 'react-redux'
import { cartslise } from './Redux/cartSlice'
import Swal from "sweetalert2";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
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

    const handleDelete = (el) => {
        axios.delete(`http://127.0.0.1:8000/api/products/${el.id}`).then((res) => {
            Swal.fire({
                title: "Deleted succefully",
                text: `product ${el.pname} deleted succefully `,
                icon: "success",
                confirmButtonText: "OK",
            }).then(() => {
                window.location.href = "/product";
            })
        }).catch((err) => {
            console.log(err);
        })
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
                        <NavLink to={`/updateproduct/${el.id}`}><FaRegEdit /></NavLink>
                        <NavLink onClick={() => handleDelete(el)} ><MdDeleteOutline /></NavLink>
                    </div>
                ))}

            </div>
        </Fragment>

    )

}

export default Axios