import React, { Fragment, useState } from 'react'
import logincss from '../css/login.module.css'
import shoopingImage from '../images/1000_F_271775672_yo8ZgraN2IHGbfqP2k0PsLjwvmatUNUJ.jpg'
import arabic from "../images/egypt flag.webp"
import axios from 'axios'
import Swal from 'sweetalert2'
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handlelogin = () => {
    const userData = {
      email: email,
      password: password
    };

    axios.post('http://127.0.0.1:8000/api/login', userData)
      .then(response => {
        console.log('Registration successful:');
        const token = response.data.token; // Assuming the token is returned in the response
        localStorage.setItem('token', token);
        localStorage.setItem('user', userData.email);

        Swal.fire({
          title: "login succefully",
          text: `user ${userData.email} Login succefully`,
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          window.location.href = "/home";
        })
          ;
        // You can handle success response here, such as redirecting the user
      })
      .catch(error => {
        console.error('login failed: ', error);
        Swal.fire({
          title: "can't login",
          text: `email or password incorrect`,
          icon: "fail",
          confirmButtonText: "OK",
        });
        // You can handle error response here, such as displaying an error message to the user
      });
  };


  return (
    <Fragment>
      {/* <h1>login</h1> */}

      <div className={logincss.loginsection}>
        {/* <img src={shoopingImage} alt="noooo" /> */}
        <div className={logincss.signman}>
          <h1>Login </h1>
          <input type="text" placeholder='Email' value={email} onChange={handleEmailChange} />

          <input type="password" placeholder='Password' value={password} onChange={handlePasswordChange} />
          <button onClick={() => handlelogin()}>Sign In</button>

        </div>

      </div>



    </Fragment>
  )
}

export default LoginPage