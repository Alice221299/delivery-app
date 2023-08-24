import React from 'react'
import Bar from '../../components/bar/Bar'
import MainButton from '../../components/mainButton/MainButton'
import orderDone from "/icons/order-done.png"
import "./accepted.scss"

const OrderAccepted = () => {
  return (
    <main className='accepted-main'>
        <div>
            <Bar text='Order is accepted'/>
            <img className='image-accepted' src={orderDone} alt="Image for order completed" />
        </div>
        <MainButton text="Follow order"/>
    </main>
  )
}

export default OrderAccepted