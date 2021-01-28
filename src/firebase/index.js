import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBxT9HJOQOH4axVLPXfr7aEslrSCm_nZNM",
    authDomain: "desafio-jera-samuel.firebaseapp.com",
    projectId: "desafio-jera-samuel",
    storageBucket: "desafio-jera-samuel.appspot.com",
    messagingSenderId: "48829941524",
    appId: "1:48829941524:web:b027c605ecbb20c0f56401",
    measurementId: "G-332MQ9T03R"
};


export const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics()