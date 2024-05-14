import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../css/singleprod.css'
import Loader from './Loader'
import { useDispatch } from 'react-redux';
import { cartslise } from './Redux/cartSlice'

const SingleProductComponent = () => {
    // console.log(useParams());
    const { productid } = useParams()
    const [singleProduct, setsingleProduct] = useState({});
    const [name, setname] = useState();
    const [id, setid] = useState();
    const [price, setprice] = useState();
    const [desc, setdesc] = useState();
    const [isloading, setisloading] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if (isloading) {
            document.documentElement.classList.add('scrollingoff');
        }
        axios.get(`http://127.0.0.1:8000/api/products/${productid}`)
            .then(res => {
                setname(res.data.pname);
                setprice(res.data.pprice);
                setdesc(res.data.pdesc);
                setid(res.data.id);
                setisloading(false);
                document.documentElement.classList.remove('scrollingoff');
            })
            .catch(err => err)
    }, [])
    const handleAddToCart = (el) => {
        dispatch(cartslise.actions.addtocart(el));
        // const items = itemAdded;
        // items.map((item) => {
        //     if (item.id == el.id) {
        //         Swal.fire({
        //             title: "Already Added",
        //             text: `product ${el.title} is already added to cart`,
        //             icon: "info",
        //             confirmButtonText: "OK",
        //         });
        //     }
        // })
        // items.push(el);



    }
    return (
        <Fragment>
            {
                isloading ? <Loader /> : null
            }

            <section id="singleproduct">
                {/* <div className='proddetils'>
                    <div className="smallimage">
                        {
                            images.map(el => (
                                <img src={el} alt='' onClick={() => hanleSmallImgClick(el)} />
                            ))
                        }

                    </div>

                    <div className="bigimg">
                        <img src={bigimg} alt="" />
                    </div>
                    <div className='prodanother'>
                        <h3>{singleProduct.title}</h3>
                        <p>{singleProduct.description}</p>
                        <p>{singleProduct.price} LE </p>
                        <p>{singleProduct.category}</p>
                        <button onClick={() => handleAddToCart(singleProduct)} >Add To Cart</button>
                    </div>
                </div> */}
                <h1>id: {id}</h1>
                <h1>name : {name}</h1>
                <h1>price : {price} LE </h1>
                <h1>Desc : {desc}</h1>
            </section>
        </Fragment>
    )
}

export default SingleProductComponent
{/* <img className="largeimage" src={`${singleProduct.thumbnail}`} alt="Large Product Image" />
<div className="somedescription"> 
    <h1>{singleProduct.title}</h1>
    <p>{singleProduct.description}</p>
</div> */}