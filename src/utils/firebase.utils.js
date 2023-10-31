import { initializeApp } from "firebase/app";


import {
  getFirestore
} from "firebase/firestore"


import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyD8foCMuMW4U6Xc7xD4L9H8AKt0TJxk-WY",
  authDomain: "yt-clone-anirudh.firebaseapp.com",
  projectId: "yt-clone-anirudh",
  storageBucket: "yt-clone-anirudh.appspot.com",
  messagingSenderId: "874356196855",
  appId: "1:874356196855:web:219ab92a4a015cb2b05af2"
};



const firebaseApp = initializeApp(firebaseConfig);


const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
  addScope: `https://www.googleapis.com/auth/youtube.force-ssl`
});


export const db = getFirestore(firebaseApp);

export const auth = getAuth();
export const logInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const logOutUser = async () => await signOut(auth);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};  