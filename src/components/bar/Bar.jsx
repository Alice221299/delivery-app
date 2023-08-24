import React from 'react'
import back from "/icons/Back.svg"
import "./bar.scss"

const Bar = ({text}) => {
  return (
    <div className='bar'>
      <img src={back} alt="Icon for go back" />
      <p>{text}</p>
    </div>
  )
}

export default Bar