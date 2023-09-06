import { getCategoriesFromCollection } from "../../services/categoriesService";
import { setCategories, setError } from "../reducers/categoriesReducer";

export const fillCategoriesFromCollection = () => async (dispatch) => {
    try {
        const categories = await getCategoriesFromCollection();
        dispatch(setCategories(categories));
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