import React from 'react'
import Bar from '../../components/bar/Bar'
import locationBlack from "/icons/Location-black.svg"
import trash from "/icons/Trash.svg"
import MainButton from '../../components/mainButton/MainButton'
import "./adresses.scss"

const ManageAdresses = () => {
  return (
    <main className='main-adresses'>
      <div>
        <Bar text='Manage adresses' location='order'/>
        <div className='adresses'>
          <div className='adress'>
            <div>
              <p>Adress 1</p>
              <div className='location'>
                <img src={locationBlack} alt="Icon for location" />
                <span>882 Well St, New-York</span>
              </div>
            </div>
            <figure className='delete'>
              <img src={trash} alt="Icon for delete" />
            </figure>
          </div>
          <div className='adress'>
            <div>
              <p>Adress 2</p>
              <div className='location'>
                <img src={locationBlack} alt="Icon for location" />
                <span>882 Well St, New-York</span>
              </div>
            </div>
            <figure className='delete'>
              <img src={trash} alt="Icon for delete" />
            </figure>
          </div>
        </div>
      </div>
      <MainButton text="Specify on the map"/>
    </main>
  )
}

export default ManageAdresses