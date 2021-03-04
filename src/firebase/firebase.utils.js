import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBl9uce0oVxAmTMesuJT-LBPKIM_QglSIM",
    authDomain: "ecom-1427a.firebaseapp.com",
    projectId: "ecom-1427a",
    storageBucket: "ecom-1427a.appspot.com",
    messagingSenderId: "118383289682",
    appId: "1:118383289682:web:aed7bfcf2fe399de30468b",
    measurementId: "G-RF9K7FXGJ3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;