import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';



const config = {

  apiKey: "AIzaSyBl9uce0oVxAmTMesuJT-LBPKIM_QglSIM",
  authDomain: "ecom-1427a.firebaseapp.com",
  databaseURL: "https://ecom-1427a-default-rtdb.firebaseio.com",
  projectId: "ecom-1427a",
  storageBucket: "ecom-1427a.appspot.com",
  messagingSenderId: "118383289682",
  appId: "1:118383289682:web:aed7bfcf2fe399de30468b",
  measurementId: "G-RF9K7FXGJ3"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
   
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);

        }
    }
    return userRef;
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;