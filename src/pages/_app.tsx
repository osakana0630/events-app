import React from 'react'
import { AuthProvider } from '../components/context/AuthContext'
import 'antd/dist/antd.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
