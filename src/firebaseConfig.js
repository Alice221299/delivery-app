// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA8W3FAB_p2GnMJKdoK7S4nRrxojmUWAFM",
//   authDomain: "delivery-app-9a81b.firebaseapp.com",
//   projectId: "delivery-app-9a81b",
//   storageBucket: "delivery-app-9a81b.appspot.com",
//   messagingSenderId: "50705869773",
//   appId: "1:50705869773:web:505855e2bc05db5520b284"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const firestore = getFirestore(app);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAwhCNa5uQjsuncC2frnb0YfSRMBY6Id2s",
//   authDomain: "crud-react-firebase-front-5.firebaseapp.com",
//   projectId: "crud-react-firebase-front-5",
//   storageBucket: "crud-react-firebase-front-5.appspot.com",
//   messagingSenderId: "1010880102199",
//   appId: "1:1010880102199:web:07b8a5d7b60a893eace4b2",
// };

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
