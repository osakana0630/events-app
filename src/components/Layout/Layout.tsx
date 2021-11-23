import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Layout as AntdLayout, Menu } from 'antd'
import Link from 'next/link'
const { Content } = AntdLayout

type Props = {
  children?: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
  <AntdLayout style={{ height: '100vh' }}>
    <Head>
      <title>CompassV2</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <AntdLayout.Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </AntdLayout.Header>
    <Content style={{ padding: '0 50px', marginTop: 64 }}>{children}</Content>
    <AntdLayout.Footer style={{ textAlign: 'center' }}>
      CompassV2 ©2021 Created by Imai
    </AntdLayout.Footer>
  </AntdLayout>
)

export default Layout
