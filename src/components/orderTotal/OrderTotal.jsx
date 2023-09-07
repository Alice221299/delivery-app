import React, { useEffect, useState } from 'react'
import "./total.scss"
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentOrder } from '../../redux/reducers/orderReducer';

const OrderTotal = () => {

  const { currentOrder } = useSelector(store => store.order);
  const dispatch = useDispatch();

  useEffect(() => {
    const calculatedTotalPrice = currentOrder.products.reduce(
      (acc, product) => acc + product.price * product.amount,
      0
    );

    const updatedOrder = { ...currentOrder, total: calculatedTotalPrice };
    dispatch(setCurrentOrder(updatedOrder));
  }, [currentOrder.products, dispatch]);



  return (
    <div className='order-total'>
        <div className='total-price'>
            <p>Products</p>
            <span><p>{currentOrder.total}</p>$ </span>
        </div>
        <div className='total-price'>
            <p>Delivery</p>
            <span><p>5</p>$ </span>
        </div>
        <hr />
        <div className='total-price total'>
            <p>Total</p>
            <span><p>{currentOrder.total + 5}</p>$ </span>
        </div>
    </div>
  )
}

export default OrderTotal