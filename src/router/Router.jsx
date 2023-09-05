import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicRouter from './PublicRouter'
import PrivateRouter from './PrivateRouter'
import ManageAdresses from '../pages/manageAdresses/ManageAdresses'
import Order from '../pages/order/Order'
import CurrentOrder from '../pages/currentOrder/CurrentOrder'
import OrderAccepted from '../pages/orderAccepted/OrderAccepted'
import Payment from '../pages/payment/Payment'
import NewCard from '../pages/newCard/NewCard'
import EditProfile from '../pages/editProfile/EditProfile'
import Profile from '../pages/profile/Profile'
import OrderData from '../pages/orderData/OrderData'
import OrdersHistory from '../pages/ordersHistory/OrdersHistory'
import Search from '../pages/search/Search'
import Home from '../pages/homePag/Home'
import CreateAccount from '../pages/createAccount/CreateAccount'
import Restaurant from '../pages/restaurant/Restaurant'
import Product from '../pages/product/Product'
import Verification from '../pages/verification/Verification'
import Splash from '../pages/splash/Splash'
import Footer from '../pages/footer/Footer'
import Login from '../pages/login/Login'


const Router = () => {

    const isAutenticated = true
  return (
    <BrowserRouter>
        <Routes>

        
        <Route path="/" element={<Login />} />
{/*                 

                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<CreateAccount />} />
                <Route path="/restaurant" element={<Restaurant />} />
                <Route path="/product" element={<Product />} />
                <Route path="/splash" element={<Splash />} />
                <Route path="/footer" element={<Footer />} /> */}

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
                    <Route path='/Search' element={<Search/>}/>
                    <Route path='/AllOrders' element={<OrdersHistory/>}/>
                    <Route path='/OrderData' element={<OrderData/>}/>
                    <Route path='/Profile' element={<Profile/>}/>
                    <Route path='/EditProfile' element={<EditProfile/>}/>

                </Route>
            </Route> */}
        </Routes>
    </BrowserRouter>
)}

export default Router