import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCnSfvu5JbkmlhFAELBvqTq84wTFMyLddU",
    authDomain: "chit-chat-5c26a.firebaseapp.com",
    projectId: "chit-chat-5c26a",
    storageBucket: "chit-chat-5c26a.appspot.com",
    messagingSenderId: "1004837582991",
    appId: "1:1004837582991:web:2ae8f591efecfa069418fa"
}).auth();