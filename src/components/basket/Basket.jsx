import React from 'react'
import { useSelector } from 'react-redux';
import "./basket.scss"
import { useNavigate } from 'react-router';

const Basket = () => {

    const { currentOrder } = useSelector(store => store.order);
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/order')
    }

  return (
    <button onClick={handleClick}>
        <span>{currentOrder.products.length}</span>
        <p>View card</p>
        <p>{currentOrder.total}</p>
    </button>
  )
}

export default Basket