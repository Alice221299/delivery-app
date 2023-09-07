import React from 'react'
import home from '../../assets/Home.png';
import search from '../../assets/Search.png';
import orders from '../../assets/Orders.png';
import profile from '../../assets/Profile.png';
import './footer.scss'
import { useNavigate } from 'react-router-dom'


const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className='footer'>
            <img onClick={() => navigate('/home')} src={home} alt="" />
            <img onClick={() => navigate('/search')} src={search} alt="" />
            <img onClick={() => navigate('/orders')} src={orders} alt="" />
            <img onClick={() => navigate('/profile')} src={profile} alt="" />
        </div>
    )
}


export default Footer