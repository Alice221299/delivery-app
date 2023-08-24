import React from 'react'
import back from "/icons/Back.svg"
import "./bar.scss"
import { useNavigate } from 'react-router-dom'

const Bar = ({text, location}) => {
  const navigate = useNavigate()

  const handleClickBack = () => {
    navigate(`/${location}`)
}
  return (
    <div className='bar'>
      <img src={back} alt="Icon for go back" onClick={handleClickBack}/>
      <p>{text}</p>
    </div>
  )
}

export default Bar