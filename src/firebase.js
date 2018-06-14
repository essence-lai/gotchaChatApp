import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyClygGFackbt8bEpdoI-gLjKxkqsaTjuFg",
    authDomain: "gotchachatapp.firebaseapp.com",
    databaseURL: "https://gotchachatapp.firebaseio.com",
    projectId: "gotchachatapp",
    storageBucket: "gotchachatapp.appspot.com",
    messagingSenderId: "326491962424"
};
firebase.initializeApp(config);

export default firebase;