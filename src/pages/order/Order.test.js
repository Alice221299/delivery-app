import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Order from './Order';

jest.mock('react-router-dom', () => ({
   useNavigate: jest.fn(),
 }));
 
 describe('Order Component', () => {
   test('should render correctly', () => {
     render(<Order />);
     
     expect(screen.getByText('Deliver to')).toBeInTheDocument();
     expect(screen.getByText('Payment')).toBeInTheDocument();
     
   });
 
   test('should increment value when + is clicked', () => {
     const { getByText } = render(<Order />);
     const incrementButton = screen.getByText('+');
     const valueText = screen.getByText('1');
     
     fireEvent.click(incrementButton);
     
     expect(valueText).toHaveTextContent('2');
   });
 
   test('should not decrement value below 1 when - is clicked', () => {
     const { getByText } = render(<Order />);
     const decrementButton = screen.getByText('-');
     const valueText = screen.getByText('1');
     
     fireEvent.click(decrementButton);
     
     expect(valueText).toHaveTextContent('1');
   });
   
   
 });