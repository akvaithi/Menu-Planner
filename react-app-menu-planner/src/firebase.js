import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5MWdhSYZYvLqivGSu2OzXEKIwVB_zL9s",
  authDomain: "menu-planner-2fa61.firebaseapp.com",
  projectId: "menu-planner-2fa61",
  storageBucket: "menu-planner-2fa61.appspot.com",
  messagingSenderId: "824389870467",
  appId: "1:824389870467:web:615ff4a8b2ba6828728cb6"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();