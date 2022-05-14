
import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyDAld7LhDsay_LSe3whA1KYCrr70S3IdqE",
  authDomain: "dreamnovalityorg.firebaseapp.com",
  projectId: "dreamnovalityorg",
  storageBucket: "dreamnovalityorg.appspot.com",
  messagingSenderId: "782831687392",
  appId: "1:782831687392:web:ce1384f55abf9f5e7c6285",
  measurementId: "G-3YX0WW0D8C"
};
firebase?.initializeApp(firebaseConfig);

// import * as firebase from 'firebase/app';
// import 'firebase/auth'
// import 'firebase/database'

// const firebaseConfig = {
//     apiKey: "AIzaSyDVrDmRyYaPkUGafiaq-1dc4Q8bmjvXITU",
//     authDomain: "shopnstich.firebaseapp.com",
//     projectId: "shopnstich",
//     storageBucket: "shopnstich.appspot.com",
//     messagingSenderId: "256924485336",
//     appId: "1:256924485336:web:bf4af5355b5d8c64d479ad",
//     measurementId: "G-DK8HMJL850"
// };
// firebase?.initializeApp(firebaseConfig);

// export default firebase;
export default firebase;