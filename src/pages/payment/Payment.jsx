import React from 'react'
import Bar from '../../components/bar/Bar'
import master from "/icons/MasterCard.png"
import paypal from "/icons/PayPal.png"
import eye from "/icons/eye.svg"
import "./payment.scss"

const Payment = () => {
  return (
    <main className='main-payment'>
        <div>
            <Bar text="Payment method"/>
            <div className='payment-methods'>
                <div className='method chosen'>
                    <div className='card-info'>
                        <img src={master} alt="" />
                        <p>**** **** **** 4574</p>
                    </div>
                    <img src={eye} alt="Icon for see method" />
                </div>
                <div className='method'>
                    <div className='card-info'>
                        <img src={paypal} alt="" />
                        <p>Lor*********@gmail.com</p>
                    </div>
                    <img src={eye} alt="Icon for see method" />
                </div>
            </div>
        </div>
        <div className='payment-redirection'>
            <p>Add new card</p>
        </div>
    </main>
  )
}

export default Payment