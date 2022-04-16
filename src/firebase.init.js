// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDv38Gq9Q37AfYQd8cNYwq8xhFMuKpkOGA',
  authDomain: 'weddography-2e501.firebaseapp.com',
  projectId: 'weddography-2e501',
  storageBucket: 'weddography-2e501.appspot.com',
  messagingSenderId: '325073976086',
  appId: '1:325073976086:web:4dd44a03d8f27f2665ee37',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
