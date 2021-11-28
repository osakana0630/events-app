import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from 'firebase/auth'
import { app } from '@/plugins/firebase'
import Router from 'next/router'

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
      await Router.push('/')
    } catch (error) {
      console.log(error)
    }
  },

  signin: async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      await Router.push('/')
    } catch (error) {
      console.log(error)
    }
  },

  signOut: async () => {
    try {
      await signOut(auth)
      await Router.push('/login')
    } catch (error) {
      console.log(error)
    }
  },
}
