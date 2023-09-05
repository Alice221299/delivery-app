import React from 'react'
import './elementSearch.scss'
const ElementSearch = ({}) => 
{

  return (
    
    <span className='elementSearch'>
        <figure className='elementSearch__figure'>
            <img src="https://assets.unileversolutions.com/recipes-v2/115358.jpg" alt="Food" />
        </figure>

        <span className='elementSearch__data'>
            <span className='nameFood'> Meat Pizza </span>
            <span className='priceFood'> $ 29.00 </span>
        </span>

    </span>
  )

}

export default ElementSearch;