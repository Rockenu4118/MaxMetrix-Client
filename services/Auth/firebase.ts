import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyCC-V8Qe0PGZ7O-4CAxMMAG0hHgrqS_24Y",
    authDomain: "mx-baseball-beta-14c4f.firebaseapp.com",
    projectId: "mx-baseball-beta-14c4f",
    storageBucket: "mx-baseball-beta-14c4f.appspot.com",
    messagingSenderId: "838129086456",
    appId: "1:838129086456:web:7fdeeca126b21bc4bd700d",
    measurementId: "G-7MXSE37QD1"
})

export const auth = app.auth()
export default app