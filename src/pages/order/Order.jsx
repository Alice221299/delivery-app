import React, { useState } from 'react'
import Bar from '../../components/bar/Bar'
import location from "/icons/Location.svg"
import next from "/icons/Next.svg"
import MainButton from '../../components/mainButton/MainButton'
import OrderTotal from '../../components/orderTotal/OrderTotal'
import "./order.scss"
import food from "/icons/anh-nguyen-kcA-c3f_3FE-unsplash.jpg"
import { useNavigate } from 'react-router-dom'
import mastercard from "/icons/MasterCard.png"
import visa from "/icons/visa.svg"
import amex from "/icons/american-express.svg"

const Order = () => {

    const [value, setValue] = useState(1)
    const { userLogged } = useSelector(store => store.auth);
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
                    <p>{userLogged.directions[0]}</p>
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
                {
                    userLogged.payment.map((method) => (
                        <div className='method-name'>
                            <img src={getInfoCard(method)} alt="" />
                            <span>{method}</span>
                        </div>
                    ))
                }
                <div className='method-name' onClick={handlePayment}>
                    <span>Add new method</span>
                </div>
            </div>
        </div>
        <div className='order-items'>
            <div className='item'>
                <div className='item-info'>
                    <img src={food} alt="" />
                    <div className='item-counter'>
                        <p onClick={decrement}>-</p>
                        <p>{value}</p>
                        <p onClick={increment}>+</p>
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
        <div className='order-finish'>
        <OrderTotal/>
        <MainButton text="Order"/>
        </div>
    </main>
  )
}

export default Order