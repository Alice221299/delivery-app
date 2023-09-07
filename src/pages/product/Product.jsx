import React from 'react'
import './product.scss'
import back from '../../assets/Back.png';
import time from '../../assets/Time.png';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fillRestaurantsFromCollection } from '../../redux/actions/restaurantsActions';
import { fillProductsFromCollection } from '../../redux/actions/productsActions';
import { setIsLogged, setUserLogged } from '../../redux/authReducer';
import { setCurrentOrder } from '../../redux/reducers/orderReducer';

const Product = () => {

  const { restaurants } = useSelector((store) => store.restaurants);
  const [ productSelected, setProductSelected] = useState({});
  const { products } = useSelector((store) => store.products);
  const { userLogged } = useSelector(store => store.auth);
  const { currentOrder } = useSelector(store => store.order);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fillProductsFromCollection());
    setProductSelected(products.filter(product => product.id == productid))
    console.log("Este es el filtrado: ", products.filter(product => product.id == productid))
    
  }, []);



const initializeOrder = () => {
    if (currentOrder) {
        const addedProduct = currentOrder.products.push(productSelected)
        dispatch(setCurrentOrder(addedProduct))
        navigate('/order')
    } else {
        const order = {
            products: [...productSelected, productSelected.amount = quantity],
            address: userLogged.address,
            payment: null,
            total: null
        }
        dispatch(setCurrentOrder(order))
        navigate('/order')
    }
}

  useEffect(() => {
    console.log("esta es la descripción del producto ", productSelected);
  }, [productSelected]);
  
  const { productid } =useParams();
  console.log("Este es el id del producto: ", productid)

const handleBack = () => {
    navigate(`/restaurant/${products[0].restaurantId}`)
};

    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const restaurantId = searchParams.get('restaurantId');
    const restaurantName = searchParams.get('restaurantName');
    const dishId = searchParams.get('dishId');

    const [dishDetails, setDishDetails] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedIngredients, setSelectedIngredients] = useState({});
    const [quantity, setQuantity] = useState(1);


    const handleBackClick = () => {
        if (restaurantId && restaurantName) {
            navigate(`/restaurant/${restaurantId}`, { state: { restaurantName } });
        } else {
            navigate(`/restaurant/${restaurantId}`);
        }
    };

    const handleQuantityChange = (amount) => {
        const newQuantity = Math.max(1, quantity + amount);
        setQuantity(newQuantity);
    };

    const handleIngredientToggle = (index) => {
        setSelectedIngredients((prevSelected) => ({
            ...prevSelected,
            [index]: !prevSelected[index],
        }));
    };

    const calculateTotalPrice = () => {
        let total = productSelected[0]?.price || 0;

        if (productSelected[0]?.ingredients) {
            total += productSelected[0].ingredients.reduce((acc, _, index) => {
                return acc + (selectedIngredients[index] ? 2000 : 0);
            }, 0);
        }

        return total;
    };

    useEffect(() => {
        const fetchDishDetails = async () => {
            try {
                const db = getFirestore();
                const dishDocRef = doc(db, 'restaurants', restaurantId, 'menu', dishId);
                const dishDocSnap = await getDoc(dishDocRef);

                if (dishDocSnap.exists()) {
                    const dishData = dishDocSnap.data();
                    setDishDetails(dishData);

                    const initialSelectedIngredients = dishData.ingredients.reduce((acc, _, index) => {
                        return {
                            ...acc,
                            [index]: selectedIngredients[index] || false,
                        };
                    }, {});
                    setSelectedIngredients(initialSelectedIngredients);


                    let initialPrice = productSelected[0].price || 0;
                    if (productSelected[0].ingredients) {
                        initialPrice += productSelected[0].ingredients.filter((_, index) => initialSelectedIngredients[index]).length * 2;
                    }
                    setTotalPrice(initialPrice);

                } else {
                    console.log('No such document!');
                }
            } catch (error) {
                console.error('Error fetching dish details:', error);
            }
        };

        const savedQuantity = localStorage.getItem('selectedQuantity');
        if (savedQuantity) {
            setQuantity(Number(savedQuantity));
        }

        if (restaurantId && dishId) {
            fetchDishDetails();
        }
    }, [dishDetails, selectedIngredients]);

    useEffect(() => {
        localStorage.setItem('selectedQuantity', quantity.toString());
    }, [quantity]);

    const handleOrderClick = () => {
        if (productSelected[0]) {
            navigate('/order', {
                state: {
                    dish: productSelected[0],
                    selectedIngredients,
                    initialQuantity: quantity,
                    totalAmount: calculateTotalPrice() * quantity,
                },
            });
        }
    };


    return (
        <div className='product'>
            <div>
                <img
                    src={back}
                    alt=""
                    onClick={handleBack}
                />
                {productSelected.length > 0 &&
                    <img
                        src={productSelected[0].image}
                        alt={productSelected[0].name}
                    />

                }
            </div>
            <div>
                <div>
                    <div>
                        <h2>{productSelected[0]?.name}</h2>
                        <span>
                            <img src={time} alt="" />
                            10 - 15 min
                        </span>
                    </div>
                    <p>{productSelected[0]?.description}</p>
                    <h3>Additional Ingredients</h3>

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
                <div>
                    <div>
                        <button onClick={() => handleQuantityChange(-1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => handleQuantityChange(1)}>+</button>
                    </div>
                    <div onClick={initializeOrder}>
                        <span> Add </span>
                        <span>$ {(calculateTotalPrice() * quantity).toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
