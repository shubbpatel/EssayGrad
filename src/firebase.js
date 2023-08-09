// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl87CjNExZKA0eQK04bYTh4YNEmxCNXG4",
  authDomain: "essay-grad.firebaseapp.com",
  databaseURL: "https://essay-grad-default-rtdb.firebaseio.com",
  projectId: "essay-grad",
  storageBucket: "essay-grad.appspot.com",
  messagingSenderId: "101193549297",
  appId: "1:101193549297:web:92d61d388325ca58f93050",
  measurementId: "G-SEBBS1GS3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
// const db = getFirestore(initializeApp(firebaseConfig));

export {app, auth};
// export default db;




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";


// const firebaseConfig = {
//   apiKey: "AIzaSyBl87CjNExZKA0eQK04bYTh4YNEmxCNXG4",
//   authDomain: "essay-grad.firebaseapp.com",
//   databaseURL: "https://essay-grad-default-rtdb.firebaseio.com",
//   projectId: "essay-grad",
//   storageBucket: "essay-grad.appspot.com",
//   messagingSenderId: "101193549297",
//   appId: "1:101193549297:web:92d61d388325ca58f93050",
//   measurementId: "G-SEBBS1GS3H"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app)



// // const analytics = getAnalytics(app);
// export {app, auth};
// export default db;
