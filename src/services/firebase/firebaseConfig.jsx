import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB05eWOfuALJtMYEktyEFVhO8eaxndDyh8",
  authDomain: "quantumpc-ecommerce.firebaseapp.com",
  projectId: "quantumpc-ecommerce",
  storageBucket: "quantumpc-ecommerce.appspot.com",
  messagingSenderId: "717884403762",
  appId: "1:717884403762:web:e1909f672bf3f373288c2b",
  measurementId: "G-D7YP350MNH",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
