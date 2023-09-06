import React from 'react'
import './restaurant.scss'
import back from '../../assets/Back.png';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { getFirestore, doc, getDoc, collection, getDocs } from "firebase/firestore";


const Restaurant = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [menuData, setMenuData] = useState([]);
    const [uniqueCategoriesArray, setUniqueCategoriesArray] = useState([]);

    useEffect(() => {
        const fetchRestaurantDetails = async () => {
            try {
                const db = getFirestore();
                const restaurantDocRef = doc(db, 'restaurants', id);
                const restaurantDocSnap = await getDoc(restaurantDocRef);

                if (restaurantDocSnap.exists()) {
                    setSelectedRestaurant(restaurantDocSnap.data());
                    const menuCollectionRef = collection(db, 'restaurants', id, 'menu');
                    const menuQuerySnapshot = await getDocs(menuCollectionRef);
                    const menuData = menuQuerySnapshot.docs.map((doc) => doc.data());
                    setMenuData(menuData);

                    const uniqueCategories = new Set();
                    menuData.forEach((dish) => {
                        uniqueCategories.add(dish.category);
                    });
                    setUniqueCategoriesArray(["All", ...uniqueCategories]);
                } else {
                    console.log('No such document!');
                }
            } catch (error) {
                console.error('Error fetching restaurant details:', error);
            }
        };

        fetchRestaurantDetails();
    }, [id]);

    if (!selectedRestaurant) {
        return <div>Loading...</div>;
    }

    const goToHome = () => {
        navigate(`/home`);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredMenuData = selectedCategory === "All" ? menuData : menuData.filter((dish) => dish.category === selectedCategory);

        const handleDishClick = (dishId) => {
        navigate(`/product?restaurantId=${id}&restaurantName=${selectedRestaurant.name}&dishId=${dishId}`);
    };
    
    

    return (
        <div className='restaurant'>
            <img src={back} alt="" onClick={goToHome} />

            <div className='restaurant__header'>
                <div>
                    <div>
                        <img src={selectedRestaurant.logo} alt="" />
                    </div>

                    <div>
                        <img src={selectedRestaurant.poster} alt={selectedRestaurant.name} />
                        <div>
                            <p>{selectedRestaurant.name}</p>
                            <p>{selectedRestaurant.description}</p>
                            <div>

                                <div className="star">
                                    {Array.from({ length: 5 }).map((_, starIndex) => {
                                        const starFraction = selectedRestaurant.rating - starIndex;
                                        let starClass = "star-icon-empty";

                                        if (starFraction >= 0.5) {
                                            starClass = "star-icon-filled";
                                        } else if (starFraction > 0) {
                                            starClass = "star-icon-half-filled";
                                        }

                                        return (
                                            <span key={starIndex} className="star-icon">
                                                {/* <FaStar className={starClass} /> */}
                                            </span>
                                        );
                                    })}
                                </div>
                                <span>{selectedRestaurant.deliveryTime}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {uniqueCategoriesArray.map((category, index) => (
                        <button>
                            {category}
                        </button>
                    ))}
                </div>
            </div>
            <br />
            <div>
                {filteredMenuData.map((dish, index) => (
                    <div key={index}>
                 <div onClick={() => handleDishClick(dish.id)}> 
                            <img src={dish.image} alt={dish.name} />
                            <div>
                                <p>{dish.name}</p>
                                <span>$ {dish.price.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Restaurant;