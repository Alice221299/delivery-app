import React from 'react';
import './splash.scss';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/Logo.png'

const Splash = () => {
  const navigate = useNavigate();
  return (
    <div className='slash' onClick={()=>navigate('/login')}>
      <div className='splash__img'>
                <img src={logo} alt="Logo delivery-app" />
            </div>
    </div>
  )
}

export default Splash