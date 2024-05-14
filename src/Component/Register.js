import React, { Fragment, useState, useEffect } from 'react'
import logincss from '../css/login.module.css'
import shoopingImage from '../images/1000_F_271775672_yo8ZgraN2IHGbfqP2k0PsLjwvmatUNUJ.jpg'
import arabic from "../images/egypt flag.webp"
import axios from 'axios';
import Swal from "sweetalert2";
const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleRegister = () => {
        const userData = {
            name: username,
            email: email,
            password: password
        };

        axios.post('http://127.0.0.1:8000/api/register', userData)
            .then(response => {
                console.log('Registration successful:', response.data);
                Swal.fire({
                    title: "Registered succefully",
                    text: `user ${userData.name} Registered succefully`,
                    icon: "success",
                    confirmButtonText: "OK",
                });
                // You can handle success response here, such as redirecting the user
            })
            .catch(error => {
                console.error('Registration failed:', error);
                // You can handle error response here, such as displaying an error message to the user
            });
    };

    return (
        <Fragment>
            {/* <h1>login</h1> */}

            <div className={logincss.loginsection}>
                {/* <img src={shoopingImage} alt="noooo" /> */}
                <div className={logincss.signman}>
                    <h1>Register </h1>
                    <input type="text" placeholder='Username' value={username} onChange={handleUsernameChange} />
                    <input type="text" placeholder='Email' value={email} onChange={handleEmailChange} />
                    <input type="password" placeholder='Password' value={password} onChange={handlePasswordChange} />
                    <button onClick={() => handleRegister()}>Register</button>
                </div>

            </div>



        </Fragment>
    )
}

export default Register