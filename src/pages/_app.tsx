import React from 'react'
import Layout from '../components/Layout/Layout'
import 'antd/dist/antd.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
