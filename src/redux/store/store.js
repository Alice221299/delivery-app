import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import orderReducer from '../reducers/orderReducer';
// import authReducer from '../redux/authReducer'

const store = configureStore({
  reducer: {
    order: orderReducer
  },
    middleware: [thunk]
  });
  
  export default store;