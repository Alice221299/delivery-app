import React, { useState } from 'react'
import Bar from '../../components/bar/Bar'
import mastercard from "/icons/MasterCard.png"
import visa from "/icons/visa.svg"
import amex from "/icons/american-express.svg"
import paypal from "/icons/PayPal.png"
import eye from "/icons/eye.svg"
import "./payment.scss"
import { useNavigate } from 'react-router-dom'

const Payment = () => {

    const navigate = useNavigate()
    const [cardNumber, setCardNumber] = useState('**** **** **** 4574')

    const lastNumbersCard = cardNumber.toString().slice(-4)

    const getInfoCard = (lastNumbers) => {
        const lastNumbersToNumber = Number(lastNumbers)
        if (lastNumbersToNumber <= 3333) {
            return mastercard
        } else if (lastNumbersToNumber > 3333 && lastNumbersToNumber <= 6666) {
            return visa
        } else {
            return amex
        }
    }

    // const getCardName = (name) => {
    //     if (name === "mastercard") {
    //         return "Master Card"
    //     } else if (name === "visa") {
    //         return "Visa"
    //     } else {
    //         return "Amex"
    //     }
    // }

  return (
    <main className='main-payment'>
        <div>
            <Bar text="Payment method"/>
            <div className='payment-methods'>
                <div className='method chosen'>
                    <div className='card-info'>
                        <img src={getInfoCard(lastNumbersCard)} alt="" role='image'/>
                        <p role='number'>{cardNumber}</p>
                    </div>
                    <img src={eye} alt="Icon for see method" />
                </div>
                <div className='method'>
                    <div className='card-info'>
                        <img src={getInfoCard(lastNumbersCard)} alt="" />
                        <p>{cardNumber}</p>
                    </div>
                    <img src={eye} alt="Icon for see method" />
                </div>
            </div>
        </div>
        <div className='payment-redirection' onClick={() => navigate('/new-card')}>
            <p>Add new card</p>
        </div>
    </main>
  )
}

export default Payment