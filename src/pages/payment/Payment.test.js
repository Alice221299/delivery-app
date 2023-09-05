import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Payment from './Payment';

jest.mock('/icons/MasterCard.png', () => 'mastercard');
jest.mock('/icons/visa.svg', () => 'visa');
jest.mock('/icons/american-express.svg', () => 'amex');
jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
  }));

describe('Payment Component', () => {

  test('should return Amex image for last numbers > 6666', () => {
    const { getByRole } = render(<Payment />);
    const cardImage = getByRole('image');
    expect(cardImage.getAttribute('src')).toEqual('amex');
  });

  test('should set lastNumbersCard correctly for card number "**** **** **** 4574"', () => {
    const { getByRole } = render(<Payment />);
    const cardNumberElement = getByRole('number');
    const cardNumber = cardNumberElement.textContent.trim();
    const lastNumbersCard = cardNumber.slice(-4);
    expect(lastNumbersCard).toEqual('4574');
  });

});