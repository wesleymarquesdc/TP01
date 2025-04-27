import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
//import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAQn1IvQCRfDs2m_IXdp7rkKGXeGq4SpEg",
  authDomain: "tp01---eng.firebaseapp.com",
  projectId: "tp01---eng",
  storageBucket: "tp01---eng.firebasestorage.app",
  messagingSenderId: "47140778742",
  appId: "1:47140778742:web:d983fb249e3d782da432d7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvide = new GoogleAuthProvider();
//const db = getFirestore(app);

export { app, auth, googleProvide}