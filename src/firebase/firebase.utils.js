import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDDfLG0Y8GS39TsxrpY7Py870xeFYMZIVU",
    authDomain: "crwn-db-aa05b.firebaseapp.com",
    projectId: "crwn-db-aa05b",
    storageBucket: "crwn-db-aa05b.appspot.com",
    messagingSenderId: "492916032927",
    appId: "1:492916032927:web:dd834285d3fc5caffde9aa",
    measurementId: "G-YBS058PCDH"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
