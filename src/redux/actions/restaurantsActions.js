import { getRestaurantsFromCollection } from "../../services/restaurantsService";
import { setRestaurants, setError } from "../reducers/restaurantsReducer";

export const fillRestaurantsFromCollection = () => async (dispatch) => {
    try {
        const restaurants = await getRestaurantsFromCollection();
        dispatch(setRestaurants(restaurants));
        dispatch(setError(false));
    } catch (error) {
        console.log(error);
        dispatch(setError({
            error: true,
            code: error.code,
            message: error.message
        }))
    }
}