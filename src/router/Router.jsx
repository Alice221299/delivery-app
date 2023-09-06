import React, { useEffect } from 'react'
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
import Splash from '../pages/splash/Splash'
import Login from '../pages/login/Login'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from '@firebase/auth'
import { auth } from '../firebaseConfig'
import { getUserActionFromCollection } from '../redux/authActions'


const Router = () => {
    const dispatch = useDispatch();
    const { isLogged, userLogged } = useSelector(store => store.auth);
    console.log(isLogged);
    useEffect(() => { 
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log(user);
                if (!userLogged?.id) {
                    dispatch(getUserActionFromCollection(uid));
                }
            } else {
                console.log("No hay sesión activa");
            }
        })
    }, [dispatch, userLogged]);
  return (
    <BrowserRouter>
        <Routes>
            <Route>
                <Route element={<PublicRouter isAuthenticate={isLogged}/>}>
                    <Route path='/' element={<Splash/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<CreateAccount/>}/>
                </Route>
                <Route element={<PrivateRouter isAuthenticate={isLogged}/>}>
                    <Route path='/adresses' element={<ManageAdresses/>}/>
                    <Route path='/order' element={<Order/>}/>
                    <Route path='/current' element={<CurrentOrder/>}/>
                    <Route path='/accepted' element={<OrderAccepted/>}/>
                    <Route path='/payment' element={<Payment/>}/>
                    <Route path='/new-card' element={<NewCard/>}/>
                    <Route path='/search' element={<Search/>}/>
                    <Route path='/allOrders' element={<OrdersHistory/>}/>
                    <Route path='/orderData' element={<OrderData/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/editProfile' element={<EditProfile/>}/>
                    <Route path="/restaurant" element={<Restaurant />} />
                    <Route path="/product" element={<Product />} />
                    <Route path='/home' element={<Home />} />
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
)}

export default Router