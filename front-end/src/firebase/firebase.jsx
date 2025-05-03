import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID
// };

const firebaseConfig = {


  apiKey: "AIzaSyAQn1IvQCRfDs2m_IXdp7rkKGXeGq4SpEg",


  authDomain: "tp01---eng.firebaseapp.com",


  projectId: "tp01---eng",


  storageBucket: "tp01---eng.firebasestorage.app",


  messagingSenderId: "47140778742",


  appId: "1:47140778742:web:d983fb249e3d782da432d7"

};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth(app);
const googleProvide = new GoogleAuthProvider();

export { app, db, storage, auth, googleProvide}