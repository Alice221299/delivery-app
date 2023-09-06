import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebaseConfig";

const collectionName = "restaurants";
const collectionRef = collection(firestore, collectionName)

export const getRestaurantsFromCollection = async () => {
    const restaurants = [];
    try {
        const querySnapshot = await getDocs(collectionRef);
        querySnapshot.forEach((doc) => {
            restaurants.push({
                id: doc.id,
                ...doc.data()
            })
        });
        return restaurants;
    } catch (error) {
        console.log(error);
        return null;
    }
}