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

// const dispatch = useDispatch();
// const { userLogged } = useSelector(store => store.auth);
// const { currentOrder } = useSelector(store => store.order);

// const initializeOrder = () => {
//     if (currentOrder) {
//         const addedProduct = currentOrder.products.push(product)
//         dispatch(setCurrentOrder(addedProduct))
//     } else {
//         const order = {
//             products: [...product, product.amount = amount],
//             address: userLogged.directions[0],
//             payment: userLogged.payment[0],
//             total: products.forEach((product) => total += product.price * product.amount) + 5
//         }
//         dispatch(setCurrentOrder(order))
//     }
// }

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

// const changePayment = (method) => {
//     const newPayment = [...currentOrder, currentOrder.payment = method]
//     dispatch(setCurrentOrder(newPayment))
// }
