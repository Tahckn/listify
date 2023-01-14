import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCVDo5pqfWRv7CHfC3JAQnmnb_JuerPWME',
  authDomain: 'listify-bf8d2.firebaseapp.com',
  projectId: 'listify-bf8d2',
  storageBucket: 'listify-bf8d2.appspot.com',
  messagingSenderId: '1060928505742',
  appId: '1:1060928505742:web:a73bb336ff94bfb98c86df',
}

//* init firebase
firebase.initializeApp(firebaseConfig)

//* init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

//* timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }
