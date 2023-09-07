import React from 'react'
import './infoOrder.scss'

const InfoOrder = ({cantidad, name, valor}) => {
  return (
    
    <section className='infoOrderOne'>
        <div className='infoOrderOne__product'>
            <span className='quantityOrder'><b>{cantidad}</b></span>
            <span className='nameOrderInfo'>{name}</span>
        </div>
        
        <span className='infoOrderOne__price'>$ {valor}</span>
    </section>

  )
}

export default InfoOrder;