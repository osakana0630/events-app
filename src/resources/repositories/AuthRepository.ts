import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  browserLocalPersistence,
  setPersistence,
  sendEmailVerification,
} from 'firebase/auth'
import { app } from '../../plugins/firebase'

type EmailAndPassword = {
  email: string
  password: string
}

const auth = getAuth(app)

export default {
  getAuth: () => auth,

  signup: async (email, password) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      )
      await sendEmailVerification(user)
      return user
    } catch (error) {
      console.log(error)
    }
  },

  signin: async (email, password) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      alert('ログインに成功しました。')
      return user
    } catch (error) {
      console.log(error)
    }
  },
}
