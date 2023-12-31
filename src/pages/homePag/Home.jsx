import React, { useEffect } from "react";
// import { useAuth } from "../../context/authContext";
import location from "../../assets/Location.png";
import arrow from "../../assets/Arrow.png";
import hamburger from "../../assets/hamburger.png";
import pizza from "../../assets/pizza.png";
import asian from "../../assets/asian.png";
import "./home.scss";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
import MainButton from "../../components/mainButton/MainButton";
import { useDispatch, useSelector } from "react-redux";
import { fillRestaurantsFromCollection } from "../../redux/actions/restaurantsActions";
import { FaStar } from "react-icons/fa";
import FooterSearch from "../../components/footerSearch/FooterSearch";import { fillProductsFromCollection } from '../../redux/actions/productsActions';
import Basket from "../../components/basket/Basket";


const Home = () => {
  const { restaurants } = useSelector((store) => store.restaurants);
  const { userLogged } = useSelector((store) => store.auth);
  const { products } = useSelector(store => store.products);
  const { currentOrder } = useSelector(store => store.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fillRestaurantsFromCollection());
    dispatch(fillProductsFromCollection())
    
  }, [dispatch]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleRestaurantClick = (restaurantid) => {
    navigate(`/restaurant/${restaurantid}`);
    console.log(restaurantid);
  };

  return (
    <div>
      <div className="home">
        <div className="home__location-container">
          <div>
            <img src={location} alt="" />
          </div>
          <div>
            <p className="home__text">DELIVER TO</p>
            <p>
              {userLogged && userLogged.addres}
              <img className="home__arrow-icon" src={arrow} alt="" />
            </p>
          </div>
        </div>

        <div className="carousel-container">
          <Slider {...settings} className="carousel">
            {restaurants !== null ? restaurants.map((restaurant, index) => (
              <div
                key={index}
                className="carousel-slide"
                onClick={() => {
                  handleRestaurantClick(restaurant.id);
                }}
              >
                <img
                  className="carousel-image"
                  src={restaurant.banner}
                  alt={restaurant.name}
                />
              </div>
            )): null}
          </Slider>
        </div>
        <br />
        <p>Restaurants and cafes</p>
        <div className="home__restaurants-container">
          <button
            className={`${selectedCategory === "All"}`}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>
          <button
            className={`${selectedCategory === "Fast Food"}`}
            onClick={() => setSelectedCategory("Fast Food")}
          >
            <img src={hamburger} alt="Fast Food" />
            <span>Fast Food</span>
          </button>
          <button
            className={`${selectedCategory === "Pizza"}`}
            onClick={() => setSelectedCategory("Pizza")}
          >
            <img src={pizza} alt="Pizza" />
            <span>Pizza</span>
          </button>
          <button
            className={`${selectedCategory === "Asian"}`}
            onClick={() => setSelectedCategory("Asian")}
          >
            <img className="Asian" src={asian} alt="Asian" />
            <span>Asian</span>
          </button>
        </div>

        <div>
          {restaurants !== null ? restaurants.map((restaurant, index) => {
            if (
              selectedCategory === "All" ||
              (restaurant.categories &&
                restaurant.categories.includes(selectedCategory))
            ) {
              return (
                <div className="list"
                  key={index}
                  onClick={() => handleRestaurantClick(restaurant.id)}
                >
                  <img className="imgList" src={restaurant.image} alt={restaurant.name} />

                  <div>
                    <p>{restaurant.name}</p>
                    <div className="star">
                      {Array.from({ length: 5 }).map((_, starIndex) => {
                        const starFraction = restaurant.raiting - starIndex;
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
                    <p>
                      {" "}
                      Work time: <span>{restaurant.preparation}</span>
                    </p>
                    <p>Before you {restaurant.price}$</p>
                  </div>
                </div>
              );
            }
            return null;
          }): null}
        </div>
      </div>
      <FooterSearch statu={1} />
      {currentOrder && 
        <Basket/>
      }
    </div>
  );
};

export default Home;
