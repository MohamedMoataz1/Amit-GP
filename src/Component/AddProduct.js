import React, { Fragment, useState } from 'react'
import addcss from '../css/addproduct.module.css'
import axios from 'axios';
import Swal from 'sweetalert2';
const AddProductcomp = () => {

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/products', {
                pname: productName,
                pprice: productPrice,
                pdesc: productDescription
            });

            console.log(response.data); // Assuming the response returns some data
            // Reset form fields after successful submission

            Swal.fire({
                title: "product added succefully",
                text: `product ${response.data.product.pname} Added succefully`,
                icon: "success",
                confirmButtonText: "OK",
            })
                ;
            setProductName('');
            setProductPrice('');
            setProductDescription('');
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <Fragment>
            <div className={addcss.container}>

                <form onSubmit={handleSubmit}>
                    <h1>Add product</h1>
                    <input
                        type="text"
                        placeholder="Product Name"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Product Price"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Product Description"
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </div>

        </Fragment>
    )
}

export default AddProductcomp