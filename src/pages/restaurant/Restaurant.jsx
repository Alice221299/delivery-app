import React from "react";
import "./restaurant.scss";
import back from "../../assets/Back.png";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fillRestaurantsFromCollection } from "../../redux/actions/restaurantsActions";
import { fillProductsFromCollection } from "../../redux/actions/productsActions";

const Restaurant = () => {
  const { restaurants } = useSelector((store) => store.restaurants);
  const { userLogged } = useSelector((store) => store.auth);
  const [productsRestaurants, setProductsRestaurants] = useState([]);
  const { products } = useSelector((store) => store.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fillRestaurantsFromCollection());
    dispatch(fillProductsFromCollection());
    setProductsRestaurants(products.filter(product => product.restaurantId == restaurantid))
    console.log("Este es el filtrado: ", products.filter(product => product.restaurantId == restaurantid))
    
    console.log("este es el valor del id del producto ", products[0].restaurantId)
    console.log("este es el valor del id del producto ", products[1].restaurantId)
    console.log("Este es el id del restaurante ", restaurantid)
  }, []);
  console.log('products', products)

  useEffect(() => {
    console.log("estos son los productos ", productsRestaurants);
  }, [productsRestaurants]);

  const { restaurantid } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [menuData, setMenuData] = useState([]);
  const [uniqueCategoriesArray, setUniqueCategoriesArray] = useState([]);

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        const db = getFirestore();
        const restaurantDocRef = doc(db, "restaurants", restaurantid);
        const restaurantDocSnap = await getDoc(restaurantDocRef);

        if (restaurantDocSnap.exists()) {
          setSelectedRestaurant(restaurantDocSnap.data());
          const menuCollectionRef = collection(
            db,
            "restaurants",
            restaurantid,
            "menu"
          );
          const menuQuerySnapshot = await getDocs(menuCollectionRef);
        //   const menuData = menuQuerySnapshot.docs.map((doc) => doc.data());
        //   setMenuData(menuData);

          const uniqueCategories = new Set();
          menuData.forEach((dish) => {
            uniqueCategories.add(dish.category);
          });
          setUniqueCategoriesArray(["All", ...uniqueCategories]);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching restaurant details:", error);
      }
    };

    fetchRestaurantDetails();
  }, [restaurantid]);

  if (!selectedRestaurant) {
    return;
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredMenuData =
    selectedCategory === "All"
      ? menuData
      : menuData.filter((dish) => dish.category === selectedCategory);

  const handleDishClick = (dishId) => {
    navigate(
      `/product/${dishId}`
    );
  };

  return (
    <div className="restaurant">
      <div className="restaurant__header">
        <div>
          <div className="restaurant__header__one">
            <img
              className="restaurant__header__one__back"
              onClick={() => navigate(-1)}
              src={back}
              alt="back arrow"
            />
            <img
              className="restaurant__header__one__logo"
              src={selectedRestaurant.logo}
              alt=""
            />
          </div>
          <div className="restaurant__middle">
            <img className="restaurant__middle__img" src={selectedRestaurant.image} alt={selectedRestaurant.name} />
            <div className="restaurant__middle__info">
              <p className="title">{selectedRestaurant.name}</p>
              <p>{selectedRestaurant.description}</p>
              <div className="star-time">
                <div className="star">
                  {Array.from({ length: 5 }).map((_, starIndex) => {
                    const starFraction = selectedRestaurant.raiting - starIndex;
                    let starClass = "star-icon-empty";

                    if (starFraction >= 0.5) {
                      starClass = "star-icon-filled";
                    } else if (starFraction > 0) {
                      starClass = "star-icon-half-filled";
                    }

                    return (
                      <span key={starIndex} className="star-icon">
                        <FaStar className={starClass} />
                      </span>
                    );
                  })}
                </div>
                <span>{selectedRestaurant.preparation}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          {uniqueCategoriesArray.map((category, index) => (
            <button>{category}</button>
          ))}
        </div>
      </div>
      <br />
      <div className="restaurant__body">
        { productsRestaurants.length > 0 && productsRestaurants.map((dish, index) => (
          <div className="restaurant__body__food" key={index}>
            <div className="restaurant__body__media" onClick={() => handleDishClick(dish.id)}>
              <img src={dish.image} alt={dish.name} />
              <div>
                <p>{dish.name}</p>
                <span>$ {dish.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
