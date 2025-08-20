// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, OAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVQBgTJxoW3tEPmj5og-V5AKgkII5jWqw",
  authDomain: "mnomoria.firebaseapp.com",
  projectId: "mnomoria",
  storageBucket: "mnomoria.firebasestorage.app",
  messagingSenderId: "205308214442",
  appId: "1:205308214442:web:2a34321e3c8029718824d3",
  measurementId: "G-YRD8SZF60T"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);

// Providers
export const googleProvider = new GoogleAuthProvider();
// export const facebookProvider = new FacebookAuthProvider();
export const appleProvider = new OAuthProvider("apple.com");

// Helper login function
export const signInWithProvider = (provider) => signInWithPopup(auth, provider);
