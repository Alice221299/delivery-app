import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicRouter from './PublicRouter'
import PrivateRouter from './PrivateRouter'
import Login from '../pages/login/Login'
import ManageAdresses from '../pages/manageAdresses/ManageAdresses'
import Order from '../pages/order/Order'
import CurrentOrder from '../pages/currentOrder/CurrentOrder'
import OrderAccepted from '../pages/orderAccepted/OrderAccepted'
import Payment from '../pages/payment/Payment'
import NewCard from '../pages/newCard/NewCard'
import Home from '../pages/homePag/Home'
import CreateAccount from '../pages/createAccount/CreateAccount'
import Restaurant from '../pages/restaurant/Restaurant'
import Product from '../pages/product/Product'
import Verification from '../pages/verification/Verification'
import Splash from '../pages/splash/Splash'
import Footer from '../pages/footer/Footer'
import LoginByPhone from '../pages/loginByPhone/LoginByPhone'

const Router = () => {

    const isAutenticated = true
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
                    <Route path='adresses' element={<ManageAdresses/>}/>
                    <Route path='order' element={<Order/>}/>
                    <Route path='current' element={<CurrentOrder/>}/>
                    <Route path='accepted' element={<OrderAccepted/>}/>
                    <Route path='payment' element={<Payment/>}/>
                    <Route path='new-card' element={<NewCard/>}/>
                </Route>
            </Route> */}
        </Routes>
    </BrowserRouter>
)}

export default Router