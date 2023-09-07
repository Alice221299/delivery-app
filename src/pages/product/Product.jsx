import React from 'react'
import './product.scss'
import back from '../../assets/Back.png';
import time from '../../assets/Time.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect } from 'react';

const Product = () => {
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
        let total = dishDetails?.price || 0;

        if (dishDetails?.ingredients) {
            total += dishDetails.ingredients.reduce((acc, _, index) => {
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


                    let initialPrice = dishData.price || 0;
                    if (dishData.ingredients) {
                        initialPrice += dishData.ingredients.filter((_, index) => initialSelectedIngredients[index]).length * 2;
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
        if (dishDetails) {
            navigate('/order', {
                state: {
                    dish: dishDetails,
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
                    onClick={handleBackClick}
                />
                {dishDetails && (
                    <img
                        src={dishDetails.image}
                        alt={dishDetails.name}
                    />
                )}
            </div>
            <div>
                <div>
                    <div>
                        <h2>{dishDetails?.name}</h2>
                        <span>
                            <img src={time} alt="" />
                            {dishDetails?.time}
                        </span>
                    </div>
                    <p>{dishDetails?.description}</p>
                    <h3>Additional Ingredients</h3>

                    {dishDetails?.ingredients && dishDetails?.ingredients.map((ingredient, index) => (
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
                    ))}
                </div>
                <div>
                    <div>
                        <button onClick={() => handleQuantityChange(-1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => handleQuantityChange(1)}>+</button>
                    </div>
                    <div onClick={handleOrderClick}>
                        <span> Add </span>
                        <span>$ {(calculateTotalPrice() * quantity).toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
