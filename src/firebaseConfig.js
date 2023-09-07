// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyA8W3FAB_p2GnMJKdoK7S4nRrxojmUWAFM",
  authDomain: "delivery-app-9a81b.firebaseapp.com",
  projectId: "delivery-app-9a81b",
  storageBucket: "delivery-app-9a81b.appspot.com",
  messagingSenderId: "50705869773",
  appId: "1:50705869773:web:505855e2bc05db5520b284"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);


// // New Firebase

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAqV5woy-9nlbHCNyLQ5rrWuAyx_qa9J88",
//   authDomain: "deliveryapp-a8232.firebaseapp.com",
//   projectId: "deliveryapp-a8232",
//   storageBucket: "deliveryapp-a8232.appspot.com",
//   messagingSenderId: "534722210056",
//   appId: "1:534722210056:web:79c711db1dacb5b191a4bd"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const firestore = getFirestore(app);