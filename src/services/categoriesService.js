import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebaseConfig";

const collectionName = "categories";
const collectionRef = collection(firestore, collectionName)

export const getCategoriesFromCollection = async () => {
    const categories = [];
    try {
        const querySnapshot = await getDocs(collectionRef);
        querySnapshot.forEach((doc) => {
            categories.push({
                id: doc.id,
                ...doc.data()
            })
        });
        return categories;
    } catch (error) {
        console.log(error);
        return null;
    }
}