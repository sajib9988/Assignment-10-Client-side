// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp_LBp2lY80SAIvTDYQmHC9epxwNGi_78",
  authDomain: "art--craft-store.firebaseapp.com",
  projectId: "art--craft-store",
  storageBucket: "art--craft-store.appspot.com",
  messagingSenderId: "973423598479",
  appId: "1:973423598479:web:54ca131eafd2afed9649fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;