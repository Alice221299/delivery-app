import React from 'react'
import "./total.scss"

const OrderTotal = () => {
  return (
    <div className='order-total'>
        <div className='total-price'>
            <p>Products</p>
            <span><p>13</p>$ </span>
        </div>
        <div className='total-price'>
            <p>Delivery</p>
            <span><p>13</p>$ </span>
        </div>
        <hr />
        <div className='total-price total'>
            <p>Total</p>
            <span><p>13</p>$ </span>
        </div>
    </div>
  )
}

export default OrderTotal