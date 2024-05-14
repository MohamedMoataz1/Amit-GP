import React, { Fragment, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar';
import axios from 'axios';
import Swal from 'sweetalert2';

const Update = () => {
    const [updated, setUpdated] = useState({});
    const { productid } = useParams();
    const onInputChange = (e) => {
        setUpdated(prev => ({ ...prev, [e.target.name]: e.target.value }))
    console.log(updated);

    }
    const SubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://127.0.0.1:8000/api/products/${productid}`, updated).then((res) => {
            Swal.fire({
                title: "updated succefully",
                text: `Done`,
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
                <Navbar />
            <form onSubmit={SubmitHandler}>
                <h1>update</h1>
                <input value={updated?.pname} onChange={onInputChange} name="pname" type="text" placeholder='new name' />
                <input value={updated?.pprice} onChange={onInputChange} name="pprice" type="text" placeholder='new price' />
                <input value={updated?.pdesc} onChange={onInputChange} name="pdesc" type="text" placeholder='new description' />
                <button type='submit' >Update</button>
            </form>
        </Fragment>
    )
}

export default Update