import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  browserLocalPersistence,
  setPersistence,
} from 'firebase/auth'
import { app } from '../../plugins/firebase'

type EmailAndPassword = {
  email: string
  password: string
}

const auth = getAuth(app)

export default {
  getAuth: () => auth,

  signUp: (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        // ..
      })
  },

  signIn: (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
      })
  },

  login: async ({ email, password }: EmailAndPassword) => {
    await setPersistence(auth, browserLocalPersistence)
    return signInWithEmailAndPassword(auth, email, password)
  },
}
