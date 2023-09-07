import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import orderReducer from '../reducers/orderReducer';
import authReducer from '../authReducer';
import restaurantsReducer from '../reducers/restaurantsReducer';
import productsReducer from '../reducers/productsReducer';
import categoriesReducer from '../reducers/categoriesReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    order: orderReducer,
    restaurants: restaurantsReducer,
    products: productsReducer,
    categories: categoriesReducer
  },
    middleware: [thunk]
  });
  
  export default store;