import React from 'react'
import Bar from '../../components/bar/Bar'
import locationBlack from "/icons/Location-black.svg"
import trash from "/icons/Trash.svg"
import MainButton from '../../components/mainButton/MainButton'
import "./adresses.scss"
import { useSelector } from 'react-redux'

const ManageAdresses = () => {

  const { userLogged } = useSelector(store => store.auth);

  return (
    <main className='main-adresses'>
      <div>
        <Bar text='Manage adresses' location='order'/>
        <div className='adresses'>
          {
            userLogged.address.map((direction, index) => (
              <div className='adress'>
            <div>
              <p>Adress {index + 1}</p>
              <div className='location'>
                <img src={locationBlack} alt="Icon for location" />
                <span>{direction}</span>
              </div>
            </div>
            <figure className='delete'>
              <img src={trash} alt="Icon for delete" />
            </figure>
          </div>
            ))
          }
        </div>
      </div>
      <MainButton text="Specify on the map"/>
    </main>
  )
}

export default ManageAdresses