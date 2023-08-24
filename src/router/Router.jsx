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

const Router = () => {

    const isAutenticated = true
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/'>
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
            </Route>
        </Routes>
    </BrowserRouter>
)}

export default Router