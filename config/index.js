import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import { useStateContext } from '../context/StateContext';
// const { } = useStateContext();


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

// const firebaseConfig = {
//   apiKey: "AIzaSyDKOhYUKHhvNC4Lt1O_8VPZtwE0ynG2K3A",
//   authDomain: "tailorshopnstitch.firebaseapp.com",
//   projectId: "tailorshopnstitch",
//   storageBucket: "tailorshopnstitch.appspot.com",
//   messagingSenderId: "651478986640",
//   appId: "1:651478986640:web:93eed2c3e4c7ba77da0d15",
//   measurementId: "G-NLBVS561JJ"
// };

firebase?.initializeApp(firebaseConfig);

export default firebase;