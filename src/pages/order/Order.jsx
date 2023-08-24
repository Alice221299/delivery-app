import React from 'react'
import Bar from '../../components/bar/Bar'
import location from "/icons/Location.svg"
import next from "/icons/Next.svg"
import master from "/icons/MasterCard.png"
import paypal from "/icons/PayPal.png"
import MainButton from '../../components/mainButton/MainButton'
import OrderTotal from '../../components/orderTotal/OrderTotal'
import "./order.scss"
import food from "/icons/anh-nguyen-kcA-c3f_3FE-unsplash.jpg"

const Order = () => {
  return (
    <main className='main-order'>
        <div>
        <Bar text='New order'/>
        <div className='order-direction'>
            <h2>Deliver to</h2>
            <div className='order-location'>
                <div className='order-adress'>
                    <img src={location} alt="Icon for location" />
                    <p>882 Well St, New-York</p>
                </div>
                <img className='arrow-forward' src={next} alt="Icon for go forward" />
            </div>
        </div>
        <div>
            <h2>Payment</h2>
            <div className='payment-method'>
                <div className='method-name'>
                    <p>Cash</p>
                </div>
                <div className='method-name'>
                    <img src={master} alt="" />
                    <span>2344.... 4589</span>
                </div>
                <div className='method-name'>
                    <img src={paypal} alt="" />
                    <span>exaple........</span>
                </div>
                <div className='method-name'>
                    <span>Add new method</span>
                </div>
            </div>
        </div>
        <div className='order-items'>
            <div className='item'>
                <div className='item-info'>
                    <img src={food} alt="" />
                    <div className='item-counter'>
                        <p>-</p>
                        <p>1</p>
                        <p>+</p>
                    </div>
                    <p>Pizza</p>
                </div>
                
                <span className='item-price'>$ <p>13</p></span>
            </div>
        </div>
        <div className='order-write'>
            <h2>Note</h2>
            <input type="text" placeholder='Write something'/>
        </div>
        </div>
        <div>
        <OrderTotal/>
        <MainButton text="Order"/>
        </div>
    </main>
  )
}

export default Order