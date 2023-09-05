import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import orderReducer from '../reducers/orderReducer';
import authReducer from '../authReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,order: orderReducer
  },
    middleware: [thunk]
  });
  
  export default store;