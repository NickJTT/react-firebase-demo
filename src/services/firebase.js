import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const CONFIG = {
  apiKey: "AIzaSyApu3JAAPRONdRFlCzONjkmPwK1WWfn-Cw",
  authDomain: "react-firebase-demo-4f019.firebaseapp.com",
  projectId: "react-firebase-demo-4f019",
  storageBucket: "react-firebase-demo-4f019.appspot.com",
  messagingSenderId: "655800586553",
  appId: "1:655800586553:web:dba19df551d7c64fa798e8"
};

firebase.initializeApp(CONFIG);

export const auth = firebase.auth();
export const db = firebase.firestore();
