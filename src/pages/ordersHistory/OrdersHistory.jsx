import React from 'react'
import './ordersHistory.scss'
import HistoryOrder from '../../components/historyOrder/HistoryOrder';
import FooterSearch from '../../components/footerSearch/FooterSearch';
const OrdersHistory = () => {
  return (
    <div className='ordersAll'>

        <span className='ordersAll__name'><b> All orders </b></span>

        <div className='ordersAll__order'>
          <HistoryOrder/>
          <HistoryOrder/>
          <HistoryOrder/>
          <HistoryOrder/>
          <HistoryOrder/>

        </div>

        <FooterSearch statu={3}/>

    </div>
  )
}

export default OrdersHistory;