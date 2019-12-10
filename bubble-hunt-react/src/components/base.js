import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBACbto5F7QxpHE-CaT9fpF19K5oPWIRpc',
  authDomain: 'bubble-hunt.firebaseapp.com',
  databaseURL: 'https://bubble-hunt.firebaseio.com',
  projectId: 'bubble-hunt',
  storageBucket: 'bubble-hunt.appspot.com',
  messagingSenderId: '930827008427',
  appId: '1:930827008427:web:d25074678c184516043aee',
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
app.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
const database = app.firestore();

export { app, database };
