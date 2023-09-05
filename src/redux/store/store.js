import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from '../authReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
    middleware: [thunk]
  });
  
  export default store;