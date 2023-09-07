import React, { useEffect, useState } from 'react'
import Bar from '../../components/bar/Bar'
import OrderTotal from '../../components/orderTotal/OrderTotal'
import MainButton from '../../components/mainButton/MainButton'
import time from "/icons/Time.svg"
import done from "/icons/Done.svg"
import food from "/icons/anh-nguyen-kcA-c3f_3FE-unsplash.jpg"
import "./current.scss"
import { useDispatch, useSelector } from 'react-redux'
import { fillOrdersFromCollection } from '../../redux/actions/orderActions'

const CurrentOrder = () => {

  const { orders } = useSelector(store => store.order);
  const { userLogged } = useSelector((store) => store.auth);
  const [orderConfirmed, setOrderConfirmed] = useState('')
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fillOrdersFromCollection());
    setOrderConfirmed(orders?.find(order => order.state === "confirmed"))
  }, [orders]);

  return (
    <main className='main-current'>
        <div className='order-details'>
        <Bar text='Current order'/>
        <div className='current-waiting'>
            <img src={time} alt="Icon for time" />
            <p>15-20 min left</p>
            <div className='waiting-steps'>
                <div className='step in-progress'>
                    <span>
                        <img src={done} alt="" />
                    </span>
                    <p>Confirmed</p>
                </div>
                <div className='step'>
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
            {
                orderConfirmed?.products?.map((item) => (
                    <div className='item'>
                <div className='item-info'>
                    <img src={food} alt="" />
                        <span className='item-amount'>x <p>{item.amount}</p></span>
                    <p>{item.name}</p>
                </div>
                <span className='item-price'>$ <p>{item.price}</p></span>
            </div>
                ))
            }
            
        </div>
        </div>
        <div className='order-finish'>
        {/* <OrderTotal/> */}
        <MainButton text="Support"/>
        </div>
    </main>
  )
}

export default CurrentOrder