import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAuIT_JVdTnBUIlgIHp8dz_yBIqX9aylyw',
  authDomain: 'whats-app-clone-e012a.firebaseapp.com',
  projectId: 'whats-app-clone-e012a',
  storageBucket: 'whats-app-clone-e012a.appspot.com',
  messagingSenderId: '378524336728',
  appId: '1:378524336728:web:5d271a5a20b9efba20002d',
  measurementId: 'G-DWPDEBGSDM',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
