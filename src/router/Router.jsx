import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicRouter from './PublicRouter'
import PrivateRouter from './PrivateRouter'
import Login from '../pages/login/Login'
import Home from '../pages/homePag/Home'
import CreateAccount from '../pages/createAccount/CreateAccount'
import Restaurant from '../pages/restaurant/Restaurant'
import Product from '../pages/product/Product'
import Verification from '../pages/verification/Verification'
import Splash from '../pages/splash/Splash'
import Footer from '../pages/footer/Footer'
import LoginByPhone from '../pages/loginByPhone/LoginByPhone'

const Router = () => {

    const isAutenticated = false
  return (
    <BrowserRouter>
        <Routes>
                <Route path="/" element={<LoginByPhone />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<CreateAccount />} />
                <Route path="/restaurant" element={<Restaurant />} />
                <Route path="/product" element={<Product />} />
                <Route path="/splash" element={<Splash />} />
                <Route path="/footer" element={<Footer />} />

            {/* <Route path='/'>
                <Route element={<PublicRouter isAutenticated={isAutenticated}/>}>
                    <Route path='login' element={<Login/>}/>
                </Route>

                <Route element={<PrivateRouter isAutenticated={isAutenticated}/>}>

                </Route>
            </Route> */}
        </Routes>
    </BrowserRouter>
)}

export default Router