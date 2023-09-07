import React from 'react'
import "./button.scss"
import { useLocation, useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { createAnOrderAction } from '../../redux/actions/orderActions'
import { setCurrentOrder } from '../../redux/reducers/orderReducer'

const MainButton = ({text}) => {

  const location = useLocation()
  const { currentOrder } = useSelector((store) => store.order);
  const { userLogged } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  
  const sendOrder = () => {
    console.log('sent');
    const productArray = []
    currentOrder?.products?.map((product) => {
    const newProduct = {
        amount: product.amount,
        name: product.name,
        price: product.price * product.amount,
        image: product.image
    }
    productArray.push(newProduct)
})
    const newOrder = {
        idRestaurant: currentOrder.products[0].restaurantId,
        idUser: userLogged.id,
        products: productArray,
        state: 'confirmed'
    }
    dispatch(createAnOrderAction(newOrder))
    dispatch(setCurrentOrder(null))
    navigate('/accepted')
}
  const click = () => {
    if (location.pathname === '/order'){
      sendOrder()
    }
    else if (location.pathname === '/accepted') {
      navigate('/current')
    }
  }
  return (
    <button onClick={click}>{text}</button>
  )
}

export default MainButton