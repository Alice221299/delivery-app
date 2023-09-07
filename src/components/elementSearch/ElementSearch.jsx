import React from 'react'
import { useNavigate } from 'react-router-dom'
import './elementSearch.scss'
const ElementSearch = ({id, image, name, price}) => 
{

  const navigate = useNavigate();

  const hanldeNavigate = (ruta) => 
  {
    navigate(`${ruta}`);
  }

  return (
    
    <span onClick={() => hanldeNavigate(`/product/${id}`)} className='elementSearch'>
        <figure className='elementSearch__figure'>
            <img src={image} alt="Food" />
        </figure>

        <span className='elementSearch__data'>
            <span className='nameFood'> {name}</span>
            <span className='priceFood'> $ {price} </span>
        </span>

    </span>
  )

}

export default ElementSearch;