//import * as firebase from 'firebase';
//import '@firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyAjYAWUZ0Af37OtTOIR34_QOmhJfKaQXx4",
  authDomain: "chatroom-5e0cf.firebaseapp.com",
  projectId: "chatroom-5e0cf",
  storageBucket: "chatroom-5e0cf.appspot.com",
  messagingSenderId: "174231852412",
  appId: "1:174231852412:web:301ac139fc5052b4f680f9"
};

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.firestore();

export {db}