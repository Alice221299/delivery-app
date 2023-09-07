import { useDispatch, useSelector } from "react-redux";
import { createAnOrderInCollection, getOrdersFromCollection } from "../../services/ordersService";
import { setOrders, addOrder, setCurrentOrder, setError } from "../reducers/orderReducer"

export const fillOrdersFromCollection = () => async (dispatch) => {
    try {
        const orders = await getOrdersFromCollection();
        dispatch(setOrders(orders));
        dispatch(setError(false));
    } catch (error) {
        console.log(error);
        dispatch(setError({
            error: true,
            code: error.code,
            message: error.message
        }))
    }
}

export const createAnOrderAction = (newOrder) => async (dispatch) => {
    try {
        const order = await createAnOrderInCollection(newOrder);
        dispatch(addOrder(order));
        dispatch(setError(false));
    } catch (error) {
        console.log(error);
        dispatch(setError({
            error: true,
            code: error.code,
            mesage: error.message
        }))
    }
}

// const productArray = []
// currentOrder.products.forEach((product) => {
//     const newProduct = {
//         amount: product.amount,
//         name: product.name,
//         price: product.price * product.amount
//     }
//     productArray.push(newProduct)
// })

// const sendOrder = () => {
//     const newOrder = {
//         idRestaurant: currentOrder.products[0].restaurantId,
//         idUser: userLogged.id,
//         products: productArray,
//         state: 'confirmed'
//     }
//     dispatch(createAnOrderAction(newOrder))
//     dispatch(setCurrentOrder(null))
//     navigate('/accepted')
// }

