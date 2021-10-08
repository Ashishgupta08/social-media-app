import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBsmdQReyyuN0tfZLcqZIpuM1GmlBjtkzQ",
    authDomain: "social-96e58.firebaseapp.com",
    projectId: "social-96e58",
    storageBucket: "social-96e58.appspot.com",
    messagingSenderId: "98682581148",
    appId: "1:98682581148:web:c2c7ac30d9fd219bcbbd59",
    measurementId: "G-1RS9C8SP78"
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const projectStorage =  firebase.storage();