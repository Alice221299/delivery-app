import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicRouter from './PublicRouter'
import PrivateRouter from './PrivateRouter'
import Login from '../pages/login/Login'

const Router = () => {

    const isAutenticated = false
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/'>
                <Route element={<PublicRouter isAutenticated={isAutenticated}/>}>
                    <Route path='login' element={<Login/>}/>
                </Route>

                <Route element={<PrivateRouter isAutenticated={isAutenticated}/>}>

                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
)}

export default Router