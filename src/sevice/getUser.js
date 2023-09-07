import { collection, doc, getDoc, getDocs, orderBy, query, setDoc,  where } from "firebase/firestore";
import { firestore } from "../firebaseConfig";

const collectionName = "users";

export const getUserFromCollection = async (uid) => {
    try {
        const userRef = doc(firestore, collectionName, uid);
        const user = await getDoc(userRef);
        if (user.exists()) {
            console.log("Document data:", user.data());
            return {
                id: user.id,
                ...user.data()
            }
        } else {
            console.log("No such document!");
            return null;
        }
    } catch (error) {
        console.log(error);
        return null;
    }

}

export const createAnUserInCollection = async (uid, newUser) => {
    try {
        const newUserRef = doc(firestore, collectionName, uid);
        await setDoc(newUserRef, newUser);
        return {
            ok: true,
            user: {
                id: uid,
                ...newUser
            }
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

//------Prueba

export const searchDoc = async ({ collectionName, fieldName, searchTerm }) => {   

    const collectionRef = collection(firestore, collectionName);
    const q = query(collectionRef, where(fieldName, ">=", searchTerm), where(fieldName, "<=", searchTerm + '\uf8ff'), orderBy(fieldName));    
    try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
        return true;
    } catch (error) {
        console.log(error);
        return null;
    }
}