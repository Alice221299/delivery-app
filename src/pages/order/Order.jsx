import React, { useState } from 'react'
import Bar from '../../components/bar/Bar'
import location from "/icons/Location.svg"
import next from "/icons/Next.svg"
import MainButton from '../../components/mainButton/MainButton'
import OrderTotal from '../../components/orderTotal/OrderTotal'
import "./order.scss"
import { useNavigate } from 'react-router-dom'
import mastercard from "/icons/MasterCard.png"
import visa from "/icons/visa.svg"
import amex from "/icons/american-express.svg"
import { useSelector } from 'react-redux'

const Order = () => {

    const [value, setValue] = useState(1)
    const { userLogged } = useSelector(store => store.auth);
    const { currentOrder } = useSelector(store => store.order);
    const navigate = useNavigate()

    const increment = () => {
        setValue(value + 1)
    }

    const decrement = () => {
        if (value >1) {
            setValue(value - 1)
        }
    }

    const handleClick = () => {
        navigate('/adresses')
    }

    const handlePayment = () => {
        navigate('/new-card')
    }

    

    const getInfoCard = (cardNumber) => {
        const lastNumbersCard = cardNumber.toString().slice(-4)
        const lastNumbersToNumber = Number(lastNumbersCard)
        if (lastNumbersToNumber <= 3333) {
            return mastercard
        } else if (lastNumbersToNumber > 3333 && lastNumbersToNumber <= 6666) {
            return visa
        } else {
            return amex
        }
    }


  return (
    <main className='main-order'>
        <div className='order-details'>
        <Bar text='New order' location=''/>
        <div className='order-direction'>
            <h2>Deliver to</h2>
            <div className='order-location'>
                <div className='order-adress'>
                    <img src={location} alt="Icon for location" />
                    <p>{userLogged.address}</p>
                </div>
                <img className='arrow-forward' src={next} alt="Icon for go forward" onClick={handleClick}/>
            </div>
        </div>
        <div>
            <h2>Payment</h2>
            <div className='payment-method'>
                <div className='method-name'>
                    <p>Cash</p>
                </div>
                {/* {
                    userLogged.payment.map((method) => (
                        <div className='method-name'>
                            <img src={getInfoCard(method)} alt="" />
                            <span>{method}</span>
                        </div>
                    ))
                } */}
                <div className='method-name' onClick={handlePayment}>
                    <span>Add new method</span>
                </div>
            </div>
        </div>
        <div className='order-items'>
            
                {
                    currentOrder.products.map((product) => (
                        <div className='item'>
                        <div className='item-info'>
                    <img src={product.image} alt="" />
                    <div className='item-counter'>
                        <p onClick={decrement}>-</p>
                        <p>{product.amount}</p>
                        <p onClick={increment}>+</p>
                    </div>
                    <p>{product.name}</p>
                </div>
                <span className='item-price'>$ <p>{product.price}</p></span>
            </div>
                    ))
                }
                
                
                
        </div>
        <div className='order-write'>
            <h2>Note</h2>
            <input type="text" placeholder='Write something'/>
        </div>
        </div>
        <div className='order-finish'>
        <OrderTotal/>
        <MainButton text="Order"/>
        </div>
    </main>
  )
}

export default Order