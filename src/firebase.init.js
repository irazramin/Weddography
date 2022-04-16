// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import getAuth from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBV-GCOF4jsXnU4XQcrPqCxAqV_5q8W7ys',
  authDomain: 'weddography-2ad15.firebaseapp.com',
  projectId: 'weddography-2ad15',
  storageBucket: 'weddography-2ad15.appspot.com',
  messagingSenderId: '1004443310853',
  appId: '1:1004443310853:web:0caa7185208d90cab3f56c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;