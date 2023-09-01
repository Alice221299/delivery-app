import React from 'react'
import './infoOrder.scss'

const InfoOrder = () => {
  return (
    
    <section className='infoOrderOne'>
        <div className='infoOrderOne__product'>
            <span className='quantityOrder'><b>1x</b></span>
            <span className='nameOrderInfo'>Meat Pizza(medium)</span>
        </div>
        
        <span className='infoOrderOne__price'>$35.50</span>
    </section>

  )
}

export default InfoOrder;