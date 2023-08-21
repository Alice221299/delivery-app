import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
// import authReducer from '../redux/authReducer'

const store = configureStore({
  reducer: {
    
  },
    middleware: [thunk]
  });
  
  export default store;