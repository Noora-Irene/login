  
import * as firebase from 'firebase';

const firebaseConfig = {
  
  };

  firebase.initializeApp(firebaseConfig);

  export const firebaseAuth = firebase.auth();