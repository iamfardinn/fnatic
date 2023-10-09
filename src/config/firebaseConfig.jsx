// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyUKl0CJkpuoks8zA0HPG4hMNJyFC-jbM",
  authDomain: "fnatic-64882.firebaseapp.com",
  projectId: "fnatic-64882",
  storageBucket: "fnatic-64882.appspot.com",
  messagingSenderId: "952329868904",
  appId: "1:952329868904:web:b6211d94625425d9c90ddd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;