import React from 'react'
import home from '../../assets/Home.png';
import search from '../../assets/Search.png';
import orders from '../../assets/Orders.png';
import profile from '../../assets/Profile.png';
import { useNavigate } from 'react-router-dom'


const Footer = () => {

    const navigate = useNavigate();

    const goHome= () => {
       navigate('/home')
    }
    const goSearch= () => {
        navigate('/search')
    }
    const goOrders= () => {
        navigate('/orders')
    }
     const goProfile= () => {
        navigate('/profile')
    }
    return (
        <div className='bg-white flex justify-between fixed bottom-0 left-0 p-4 w-full'>
            <img className='object-contain' onClick={goHome} src={home} alt="" />
            <img className='object-contain' onClick={goSearch} src={search} alt="" />
            <img className='object-contain' onClick={goOrders} src={orders} alt="" />
            <img className='object-contain' onClick={goProfile} src={profile} alt="" />
        </div>
    )
}

export default Footer