import React from 'react'
import Link from 'next/link'
import { Layout, Menu } from 'antd'

export const Header = () => {
  return (
    <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>
        {/*<Menu.Item key="2">nav 2</Menu.Item>*/}
        {/*<Menu.Item key="3">nav 3</Menu.Item>*/}
      </Menu>
    </Layout.Header>
  )
}
