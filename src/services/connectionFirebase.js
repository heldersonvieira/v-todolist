/* eslint-disable no-undef */
import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyD6Tiq8W19ByQPf89WxN36L8wMoyf7OvSI",
    authDomain: "v-todolist.firebaseapp.com",
    databaseURL: "https://v-todolist-default-rtdb.firebaseio.com",
    projectId: "v-todolist",
    storageBucket: "v-todolist.appspot.com",
    messagingSenderId: "992652369783",
    appId: "1:992652369783:web:e4c2aaf49fe9102c1c4b72",
    measurementId: "G-FFR5N7Z0YK",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
