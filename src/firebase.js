import firebase from 'firebase/app';
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAJwduvP9GqunjdAEshNIlevn7dGeA4n7o",
    authDomain: "react-song-tracker.firebaseapp.com",
    projectId: "react-song-tracker",
    storageBucket: "react-song-tracker.appspot.com",
    messagingSenderId: "839039873339",
    appId: "1:839039873339:web:1db5c6949137990264c71e"
};

firebase.initializeApp(firebaseConfig);

export default firebase;