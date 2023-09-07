import React, { useEffect, useState } from 'react'
import './ordersHistory.scss'
import HistoryOrder from '../../components/historyOrder/HistoryOrder';
import FooterSearch from '../../components/footerSearch/FooterSearch';
import { useDispatch, useSelector } from 'react-redux';
import { fillOrdersFromCollection } from '../../redux/actions/orderActions';
const OrdersHistory = () => {

  const { orders } = useSelector(store => store.order);
  const { userLogged } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const [ordersUser, setOrdersUser] = useState([]);
  useEffect(() => {
    dispatch(fillOrdersFromCollection());
    console.log("user", userLogged);
 
    
    
    
  }, [dispatch]);

  useEffect (()=> 
                    {

                        console.log('Esta es la orden: ', orders)

                        if (orders.length > 0)
                        {
                          console.log('Ya existen las órdenes. ;)');

                          setOrdersUser(orders.filter(order => order.idUser == userLogged.id) );
                        }
                      
                    }, [orders])



  useEffect( () => 
  {
    console.log('Estas son las órdenes del usuario: ', ordersUser);
    
    

    if (ordersUser.length > 0)
    {
      if ( ordersUser[0].total)
      {
        console.log('Sí existe la sumaaaaaaaa',ordersUser[0].total )
      }
      else 
      {
        const addTotalProperty = (ordersUser) => 
        {
          return ordersUser.map(order => { const total = order.products.reduce((sum, product) => sum + product.price, 0); // Usamos el método Object.assign para crear el nuevo objeto 
          return Object.assign({}, order, {total: total}); }); 
        }

        setOrdersUser(addTotalProperty(ordersUser));
      }

      console.log('El arreglo de usuario está lleno con sus órdenes.');
      
    } 
  },[ordersUser])


  

  return (
    <div className='ordersAll'>

        <span className='ordersAll__name'><b> All orders </b></span>

        <div className='ordersAll__order'>

          {ordersUser.length > 0 ? ordersUser[0].total && ordersUser.map(orderUser => ( <HistoryOrder key={orderUser.id} idOrder={orderUser.id} idRestaurant={orderUser.idRestaurant} total={orderUser.total} statu={orderUser.state} /> )): <h1>No EXISTEE</h1>}

        </div>

        <FooterSearch statu={3}/>

    </div>
  )
}

export default OrdersHistory;