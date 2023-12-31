import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    error: null
    
};
  
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const { setProducts, setError } = productsSlice.actions;
  
export default  productsSlice.reducer;