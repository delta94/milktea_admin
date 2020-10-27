import firebase from 'firebase/app';
import 'firebase/firestore';

let firebaseConfig = {
  apiKey: 'AIzaSyBXdT4Fh9pi26VBgpArCyzeRQxGg7aDf_4',
  authDomain: 'souptatua-5e194.firebaseapp.com',
  databaseURL: 'https://souptatua-5e194.firebaseio.com',
  projectId: 'souptatua-5e194',
  storageBucket: 'souptatua-5e194.appspot.com',
  messagingSenderId: '996078712595',
  appId: '1:996078712595:web:c8e80901478ec49eeccce6',
  measurementId: 'G-TK9RE3MKJ9',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export default firebase;
