import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    restaurants: [],
    error: null
    
};
  
const restaurantSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {
        setRestaurants: (state, action) => {
            state.restaurants = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const { setRestaurants, setError } = restaurantSlice.actions;
  
export default  restaurantSlice.reducer;