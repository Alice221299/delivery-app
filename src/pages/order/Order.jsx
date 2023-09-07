import React, { useState } from "react";
import Bar from "../../components/bar/Bar";
import location from "/icons/Location.svg";
import next from "/icons/Next.svg";
import MainButton from "../../components/mainButton/MainButton";
import OrderTotal from "../../components/orderTotal/OrderTotal";
import "./order.scss";
import { useLocation, useNavigate } from "react-router-dom";
import mastercard from "/icons/MasterCard.png";
import visa from "/icons/visa.svg";
import amex from "/icons/american-express.svg";
import { useSelector } from "react-redux";
import { setCurrentOrder } from "../../redux/reducers/orderReducer";

const Order = () => {
    const { currentOrder } = useSelector((store) => store.order);
  const [value, setValue] = useState(currentOrder.products[0].amount);
  const { userLogged } = useSelector((store) => store.auth);
  
  const navigate = useNavigate();

  console.log(currentOrder);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const handleClick = () => {
    navigate("/adresses");
  };

  const handlePayment = () => {
    navigate("/new-card");
  };

  const getInfoCard = (cardNumber) => {
    const lastNumbersCard = cardNumber.toString().slice(-4);
    const lastNumbersToNumber = Number(lastNumbersCard);
    if (lastNumbersToNumber <= 3333) {
      return mastercard;
    } else if (lastNumbersToNumber > 3333 && lastNumbersToNumber <= 6666) {
      return visa;
    } else {
      return amex;
    }
  };

  const changePayment = (method) => {
    const newPayment = [...currentOrder, (currentOrder.payment = method)];
    dispatch(setCurrentOrder(newPayment));
  };

  const maskCardNumber = (cardNumber) => {
    const firstFour = cardNumber.substring(0, 4);
    const lastFour = cardNumber.substring(cardNumber.length - 4);

    const maskedMiddle = "*".repeat(8);

    const maskedCardNumber = `${firstFour} ${maskedMiddle} ${lastFour}`;

    return maskedCardNumber;
  };

  const productArray = []
currentOrder.products.forEach((product) => {
    const newProduct = {
        amount: product.amount,
        name: product.name,
        price: product.price * product.amount
    }
    productArray.push(newProduct)
})

const sendOrder = () => {
    console.log('sent');
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
// const location = useLocation()
// console.log(location);

  return (
    <main className="main-order">
      <div className="order-details">
        <Bar text="New order" location="" />
        <div className="order-direction">
          <h2>Deliver to</h2>
          <div className="order-location">
            <div className="order-adress">
              <img src={location} alt="Icon for location" />
              <p>{userLogged.address[0]}</p>
            </div>
            <img
              className="arrow-forward"
              src={next}
              alt="Icon for go forward"
              onClick={handleClick}
            />
          </div>
        </div>
        <div>
          <h2>Payment</h2>
          <div className="payment-method">
            <div className="method-name">
              <p>Cash</p>
            </div>
            {userLogged.payment.map((method) => (
              <div
                className={
                  method === currentOrder.payment
                    ? "method-name method-chosen"
                    : "method-name"
                }
              >
                <img src={getInfoCard(method)} alt="" />
                <span>{maskCardNumber(method)}</span>
              </div>
            ))}
            <div className="method-name" onClick={handlePayment}>
              <span>Add new method</span>
            </div>
          </div>
        </div>
        <div className="order-items">
          {currentOrder.products.map((product) => (
            <div className="item">
              <div className="item-info">
                <img src={product.image} alt="" />
                <div className="item-counter">
                  <p onClick={decrement}>-</p>
                  <p>{value}</p>
                  <p onClick={increment}>+</p>
                </div>
                <p>{product.name}</p>
              </div>
              <span className="item-price">
                $ <p>{product.price}</p>
              </span>
            </div>
          ))}
        </div>
        <div className="order-write">
          <h2>Note</h2>
          <input type="text" placeholder="Write something" />
        </div>
      </div>
      <div className="order-finish">
        <OrderTotal />
        <MainButton text="Order"/>
      </div>
    </main>
  );
};

export default Order;
