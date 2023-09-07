import React from 'react'
import './orderData.scss'
import { useNavigate, useParams } from 'react-router-dom'
import FooterSearch from '../../components/footerSearch/FooterSearch'
import InfoOrder from '../../components/infoOrder/InfoOrder';



const OrderData = () => {

    const {idOrder} = useParams();
    const navigate = useNavigate();
    const handleNavigate = (ruta) => 
    {
        navigate(`${ruta}`);
    }
    return (
        <div className='dataOrdersDetail'>

            <section className='backDataOrder'>
                <svg onClick={() => handleNavigate('/AllOrders')} className='backAllOrders' xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                    <path d="M2 9C2.55228 9 3 8.55228 3 8C3 7.44772 2.55228 7 2 7L2 9ZM0.292893 7.29289C-0.097631 7.68342 -0.097631 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM2 7H1L1 9H2L2 7Z" fill="#414141" />
                </svg>
                <span className='ordersAll__name'><b> 26.11.2022 </b></span>

            </section>

            <div className='ordersAll__order infoOrderData'>

                <InfoOrder/>
                <InfoOrder/>
                <InfoOrder/>
                <InfoOrder/>

            </div>

                <span className='dataPayment'>
                    <b>Production cost</b>
                    <span>$66.49</span>
                </span>

                <span className='dataPayment'>
                    <b>Сost of delivery</b>
                    <span>$8.00</span>
                </span>

                <span className='lineSplit'>

                </span>

                <span className='dataPayment'>
                    <b>Total</b>
                    <span><b>$74.49</b></span>
                </span>

            <FooterSearch statu={3} />

        </div>
    )
}

export default OrderData;