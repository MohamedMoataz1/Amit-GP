import logo from './logo.svg';
import HomeComponent from './Component/HomeComponent';
import './App.css';
import { Fragment } from 'react';
import Products from './Component/Products';
import VitoloComponent from './Component/VitoloComponent';
import AboutComponent from './Component/AboutComponent';
import ClassComponent from './Component/ClassComponent'
import Task from './Component/Task';
import Effect from './Component/Effect';
import Axios from './Component/Axios';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Routes/Home';
import Product from './Routes/Product';
import Login from './Routes/Login';
import RegisterRoute from './Routes/RegisterRoute';
import SingleProductPage from './Routes/SingleProductPage';
import Contact from './Routes/Contact';
import About from './Routes/About';
import Cart from './Component/Cart';
import Register from './Component/Register';
import Update from './Component/Update';
import AddProduct from './Routes/AddProduct';
function App() {
  const user = localStorage.getItem('user');
  console.log(user);
  return (
    <Fragment>
      {/* <HomeComponent />
      <Products />
      <VitoloComponent />
      <AboutComponent />
      <ClassComponent />
      <Task /> */}
      {/* <Effect/> */}
      {/* <Axios/> */}
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route>
          <Route path='/product/*' element={<Product/>} />
          <Route path='/products/:productid' element={ <SingleProductPage/>} ></Route>
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Register' element={<RegisterRoute />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/updateproduct/:productid' element={ <Update/>} ></Route>
        <Route path="/addproduct"  element={<AddProduct/>}  />
      </Routes>

      {/* <Test/> */}
    </Fragment>
  );
}

export default App;
