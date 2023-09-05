import {render, fireEvent, getByText} from '@testing-library/react'
import '@testing-library/jest-dom'
import Order from './Order'
import React, { useState } from 'react'
import Bar from 'src/components/bar/Bar.jsx'
import location from "/icons/Location.svg"
import next from "/icons/Next.svg"
import master from "/icons/MasterCard.png"
import paypal from "/icons/PayPal.png"
import MainButton from '../../components/mainButton/MainButton'
import OrderTotal from '../../components/orderTotal/OrderTotal'
import "./order.scss"
import food from "/icons/anh-nguyen-kcA-c3f_3FE-unsplash.jpg"
import { useNavigate } from 'react-router-dom'
import back from "../../../public/icons/Back.svg"


test('should increase by 1 by doing click', () => { 
    const {getByText} = render(<Order/>)
    const buttonIncrease = getByText('+')
    const valueText = getByText('value')
    fireEvent.click(buttonIncrease)
    expect(valueText).toHaveTextContent(2)
 })

 test('should decrease by 1 by doing click', () => { 
    const {getByText} = render(<Order/>)
    const buttonIncrease = getByText('-')
    const valueText = getByText('value')
    fireEvent.click(buttonIncrease)
    expect(valueText).toHaveTextContent(1)
 })