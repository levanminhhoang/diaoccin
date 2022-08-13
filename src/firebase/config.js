import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDYaJ_yLkxkCGwTjWq-_DF2A92tpjqT8J4",
  authDomain: "diaoccin.firebaseapp.com",
  projectId: "diaoccin",
  storageBucket: "diaoccin.appspot.com",
  messagingSenderId: "987575611574",
  appId: "1:987575611574:web:1b4adac477f83f3f987617",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
