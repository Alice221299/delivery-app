import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import './historyOrder.scss'
import { useNavigate } from 'react-router-dom'
import { fillRestaurantsFromCollection } from "../../redux/actions/restaurantsActions";

const HistoryOrder = ({idRestaurant, total, statu, idOrder}) => {

    const { restaurants } = useSelector((store) => store.restaurants);

    const [res, setRes] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fillRestaurantsFromCollection());
      }, []);


    useEffect (() => 
    {
            console.log('El restaurante es: ', restaurants)

            if (restaurants.length > 0) 
            {
                setRes(restaurants.filter(order => order.id == idRestaurant) );
            } 
    }, [restaurants])

    useEffect(()=> 
    {
            if (res.length >0 )
            {
                console.log('El restaurante es: ', res)
            }
    }, [res])

    const navigate = useNavigate();
    const handleNavigate = (ruta) => 
    {
        navigate(`${ruta}`);
    }
    return (
        <span className='oneOrder'>
            
            <section className='detailOrder'>

                { res.length >0 && <figure className='detailOrder__figure'>
                    <img className='orderImg' src= {res[0].image} alt="Restaurant" />
                </figure>}

                <span className='restaurant'>
                    {res.length > 0 && <span className='restaurant__name'><b>{res[0].name}</b></span>}
                    <span className='restaurant__price'><b>$ {total}</b></span>
                </span>

            </section>

            <section className='statuOrders'>

                <span className='statuOrder'><b>{statu}</b></span>
                <svg onClick={() => handleNavigate(`/OrderData/${idOrder}`)} className='arrowOrder' xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8" fill="none">
                    <path d="M4.35355 4.35355C4.54882 4.15829 4.54882 3.84171 4.35355 3.64645L1.17157 0.464466C0.976311 0.269204 0.659728 0.269204 0.464466 0.464466C0.269204 0.659728 0.269204 0.976311 0.464466 1.17157L3.29289 4L0.464466 6.82843C0.269204 7.02369 0.269204 7.34027 0.464466 7.53553C0.659728 7.7308 0.976311 7.7308 1.17157 7.53553L4.35355 4.35355ZM3 4.5H4V3.5H3V4.5Z" fill="#414141" />
                </svg>

            </section>
        </span>
    )
}

export default HistoryOrder;