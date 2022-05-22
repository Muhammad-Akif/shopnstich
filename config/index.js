import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDVrDmRyYaPkUGafiaq-1dc4Q8bmjvXITU",
  authDomain: "shopnstich.firebaseapp.com",
  databaseURL: "https://shopnstich-default-rtdb.firebaseio.com",
  projectId: "shopnstich",
  storageBucket: "shopnstich.appspot.com",
  messagingSenderId: "256924485336",
  appId: "1:256924485336:web:bf4af5355b5d8c64d479ad",
  measurementId: "G-DK8HMJL850"
};
firebase?.initializeApp(firebaseConfig);

export default firebase;