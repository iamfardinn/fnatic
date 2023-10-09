import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDyUKl0CJkpuoks8zA0HPG4hMNJyFC-jbM",
  authDomain: "fnatic-64882.firebaseapp.com",
  projectId: "fnatic-64882",
  storageBucket: "fnatic-64882.appspot.com",
  messagingSenderId: "952329868904",
  appId: "1:952329868904:web:b6211d94625425d9c90ddd"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
