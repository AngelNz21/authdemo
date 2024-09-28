import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB21uleseaTVJiOzHqZ9FKp79ODumHnTBo",
  authDomain: "authdemo-febae.firebaseapp.com",
  projectId: "authdemo-febae",
  storageBucket: "authdemo-febae.appspot.com",
  messagingSenderId: "5523170455",
  appId: "1:5523170455:web:2ea156b0e1e88b7699f5d2",
  measurementId: "G-R0Y14FYKYC"
};

firebase.initializeApp(firebaseConfig)
var storage = firebase.storage();

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, storage };

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user)
      const usuarioActivo ={
        email: user.email,
        uid: user.uid
      }
     store.dispatch('detectarUsuario', usuarioActivo)
     console.log(usuarioActivo)
    // ...
  } else {
    console.log(user)
    store.dispatch('detectarUsuario', user)
    // User is signed out
    // ...
  } 
});

createApp(App).use(store).use(router).mount('#app')

