import React from 'react'
import Bar from '../../components/bar/Bar'
import MainButton from '../../components/mainButton/MainButton'
import "./newCard.scss"
import eye from "/icons/eye.svg"
import { useSelector } from 'react-redux'

const NewCard = () => {

  const { userLogged } = useSelector(store => store.auth);

  
  return (
    <main className='main-card'>
        <Bar text="Add new card" location='payment'/>
        <form className='card-form'>
            <div>
            <input type="text" placeholder='Card name'/>
            <div className='card-number'>
                <input type="text" placeholder='Card number'/>
                <img src={eye} alt="Icon for see number" />
            </div>
            
            <div className='card-details'>
                <input type="text" placeholder='Expires'/>
                <input type="text" placeholder='CVV'/>
            </div>
            </div>
            <MainButton text="Save"/>
        </form>
    </main>
  )
}

export default NewCard