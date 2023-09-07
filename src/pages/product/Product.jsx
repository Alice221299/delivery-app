import React from 'react'
import './product.scss'
import back from '../../assets/Back.png';
import time from '../../assets/Time.png';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fillProductsFromCollection } from '../../redux/actions/productsActions';
import { setCurrentOrder } from '../../redux/reducers/orderReducer';

const Product = () => {

  const [ productSelected, setProductSelected] = useState('');
  const { products } = useSelector((store) => store.products);
  const { userLogged } = useSelector(store => store.auth);
  const { currentOrder } = useSelector(store => store.order);

  const navigate = useNavigate();
  const dispatch = useDispatch();
//   const location = useLocation();
  const [quantity, setQuantity] = useState(1);
 

  useEffect(() => {
    // dispatch(fillProductsFromCollection());
    setProductSelected(products.filter(product => product.id == productid))
    
  }, []);

console.log(productSelected);

  const initializeOrder = () => {
    if (currentOrder) {
      const updatedOrder = {
        ...currentOrder,
        products: [
          ...currentOrder.products,
          { ...productSelected[0], amount: quantity },
        ],
      };
      dispatch(setCurrentOrder(updatedOrder));
      // navigate('/order')
    } else if (currentOrder === null) {
      const order = {
        products: [{ ...productSelected[0], amount: quantity }],
        address: userLogged.address[0],
        payment: userLogged.payment[0],
        total: null,
      };
      dispatch(setCurrentOrder(order));
      // navigate('/order')
    }
  };
  
  

  const { productid } = useParams();
//   console.log("Este es el id del producto: ", productid)

const handleBack = () => {
    navigate(`/home`)
};   
 const increment = () => {
        setQuantity(quantity + 1)
    }

    const decrement = () => {
        if (quantity >1) {
            setQuantity(quantity - 1)
        }
    }
//   useEffect(() => {
//     console.log("esta es la descripción del producto ", productSelected);
//   }, [productSelected]);
  


    
    // const searchParams = new URLSearchParams(location.search);
    // const restaurantId = searchParams.get('restaurantId');
    // const restaurantName = searchParams.get('restaurantName');
    // const dishId = searchParams.get('dishId');

    // const [dishDetails, setDishDetails] = useState(null);
    // const [totalPrice, setTotalPrice] = useState(0);
    // const [selectedIngredients, setSelectedIngredients] = useState({});
    


    // const handleBackClick = () => {
    //     if (restaurantId && restaurantName) {
    //         navigate(`/restaurant/${restaurantId}`, { state: { restaurantName } });
    //     } else {
    //         navigate(`/restaurant/${restaurantId}`);
    //     }
    // };



    // const handleQuantityChange = (amount) => {
    //     const newQuantity = Math.max(1, quantity + amount);
    //     setQuantity(newQuantity);
    // };

    // const handleIngredientToggle = (index) => {
    //     setSelectedIngredients((prevSelected) => ({
    //         ...prevSelected,
    //         [index]: !prevSelected[index],
    //     }));
    // };

    // const calculateTotalPrice = () => {
    //     let total = productSelected[0]?.price || 0;

    //     if (productSelected[0]?.ingredients) {
    //         total += productSelected[0].ingredients.reduce((acc, _, index) => {
    //             return acc + (selectedIngredients[index] ? 2000 : 0);
    //         }, 0);
    //     }

    //     return total;
    // };

    // useEffect(() => {
    //     const fetchDishDetails = async () => {
    //         try {
    //             const db = getFirestore();
    //             const dishDocRef = doc(db, 'restaurants', restaurantId, 'menu', dishId);
    //             const dishDocSnap = await getDoc(dishDocRef);

    //             if (dishDocSnap.exists()) {
    //                 const dishData = dishDocSnap.data();
    //                 setDishDetails(dishData);

    //                 const initialSelectedIngredients = dishData.ingredients.reduce((acc, _, index) => {
    //                     return {
    //                         ...acc,
    //                         [index]: selectedIngredients[index] || false,
    //                     };
    //                 }, {});
    //                 setSelectedIngredients(initialSelectedIngredients);


    //                 let initialPrice = productSelected[0].price || 0;
    //                 if (productSelected[0].ingredients) {
    //                     initialPrice += productSelected[0].ingredients.filter((_, index) => initialSelectedIngredients[index]).length * 2;
    //                 }
    //                 setTotalPrice(initialPrice);

    //             } else {
    //                 console.log('No such document!');
    //             }
    //         } catch (error) {
    //             console.error('Error fetching dish details:', error);
    //         }
    //     };

    //     const savedQuantity = localStorage.getItem('selectedQuantity');
    //     if (savedQuantity) {
    //         setQuantity(Number(savedQuantity));
    //     }

    //     if (restaurantId && dishId) {
    //         fetchDishDetails();
    //     }
    // }, [dishDetails, selectedIngredients]);

    // useEffect(() => {
    //     localStorage.setItem('selectedQuantity', quantity.toString());
    // }, [quantity]);

    // const handleOrderClick = () => {
    //     if (productSelected[0]) {
    //         navigate('/order', {
    //             state: {
    //                 dish: productSelected[0],
    //                 selectedIngredients,
    //                 initialQuantity: quantity,
    //                 totalAmount: calculateTotalPrice() * quantity,
    //             },
    //         });
    //     }
    // };


    return (
        <div className='product'>
            <div className='product__header'>
                <img className='back'
                    src={back}
                    alt=""
                    onClick={handleBack}
                />
                {productSelected.length > 0 &&
                    <img className='img'
                        src={productSelected[0].image}
                        alt={productSelected[0].name}
                    />

                }
            </div>
            <div className='product__container'>
                <div className='product__body'>
                    <div className='product__body__title'>
                        <h2>{productSelected[0]?.name}</h2>
                        <span>
                            <img src={time} alt="" />
                            10 - 15 min
                        </span>
                    </div>
                    <p className='product__body__description'>{productSelected[0]?.description}</p>
                    {/* <h3>Additional Ingredients</h3> */}

                    {/* {productSelected?.ingredients && productSelected?.ingredients.map((ingredient, index) => (
                        <div key={index}>
                            <div>
                                <input
                                    type="checkbox"
                                    checked={selectedIngredients[index]}
                                    onChange={() => handleIngredientToggle(index)}
                                />
                                <span>{ingredient}</span>
                            </div>
                            <span>{selectedIngredients[index] ? '+ $ 2000' : ''}</span>
                        </div>
                    ))} */}
                </div>
                <div className='product__footer'>
                    <div  className='product__footer__counter'>
                        <span onClick={decrement}>-</span>
                        <span>{quantity}</span>
                        <span onClick={increment}>+</span>
                    </div>
                    <div className='product__footer__add' onClick={initializeOrder}>
                        <span> Add </span>
                        <span>{productSelected[0]?.price * quantity} $</span>
                        {/* <span>$ {(calculateTotalPrice() * quantity).toFixed(2)}</span> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
