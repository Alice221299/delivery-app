import React, { useEffect } from 'react'
import './ordersHistory.scss'
import HistoryOrder from '../../components/historyOrder/HistoryOrder';
import FooterSearch from '../../components/footerSearch/FooterSearch';
import { useDispatch, useSelector } from 'react-redux';
import { fillOrdersFromCollection } from '../../redux/actions/orderActions';
const OrdersHistory = () => {

  const { orders } = useSelector(store => store.order);
  const { userLogged } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fillOrdersFromCollection());
    console.log("user", userLogged);
  }, [dispatch]);

  console.log('orders', orders);
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