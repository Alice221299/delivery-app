import React from 'react'
import Bar from '../../components/bar/Bar'
import OrderTotal from '../../components/orderTotal/OrderTotal'
import MainButton from '../../components/mainButton/MainButton'
import time from "/icons/Time.svg"
import done from "/icons/Done.svg"
import food from "/icons/anh-nguyen-kcA-c3f_3FE-unsplash.jpg"
import "./current.scss"

const CurrentOrder = () => {
  return (
    <main className='main-current'>
        <div>
        <Bar text='Current order'/>
        <div className='current-waiting'>
            <img src={time} alt="Icon for time" />
            <p>15-20 min left</p>
            <div className='waiting-steps'>
                <div className='step completed'>
                    <span>
                        <img src={done} alt="" />
                    </span>
                    <p>Confirmed</p>
                </div>
                <div className='step in-progress'>
                    <span>
                        <img src={done} alt="" />
                    </span>
                    <p>Cooking</p>
                </div>
                <div className='step '>
                    <span>
                        <img src={done} alt="" />
                    </span>
                    <p>On the way</p>
                </div>
                <div className='step'>
                    <span>
                        <img src={done} alt="" />
                    </span>
                    <p>Delivered</p>
                </div>
            </div>
        </div>
        <div className='order-items'>
            <div className='item'>
                <div className='item-info'>
                    <img src={food} alt="" />
                        <span className='item-amount'>x <p>2</p></span>
                    <p>Pizza</p>
                </div>
                <span className='item-price'>$ <p>13</p></span>
            </div>
        </div>
        </div>
        <div>
        <OrderTotal/>
        <MainButton text="Support"/>
        </div>
    </main>
  )
}

export default CurrentOrder