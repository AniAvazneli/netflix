// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyApqxnoZVkX2WbYDUCoi4y_Vi6iew2GBpE",
    authDomain: "netflix-ec2db.firebaseapp.com",
    projectId: "netflix-ec2db",
    storageBucket: "netflix-ec2db.appspot.com",
    messagingSenderId: "484898811522",
    appId: "1:484898811522:web:6a7d0fad945c03482c8e9b",
    measurementId: "G-DEXYK210QQ"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }