// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyABu_u00E8tRliREE3Js8H4KCHqrNB8SME",
    authDomain: "nexstream-a3b17.firebaseapp.com",
    projectId: "nexstream-a3b17",
    storageBucket: "nexstream-a3b17.appspot.com",
    messagingSenderId: "48699271122",
    appId: "1:48699271122:web:dfe9b5e75d78f8a2ceca0b",
    measurementId: "G-5JXN05HDGT"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }