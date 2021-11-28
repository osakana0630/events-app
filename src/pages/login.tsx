import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import { Form, Input, Button, Checkbox, Col } from 'antd'
import RepositoryFactory from '../resources/RepositoryFactory'
const { Item } = Form
const authRepository = RepositoryFactory.get('auth')

const Login = () => {
  // submit時のイベントハンドラ
  const onFinish = async (values) => {
    const { email, password } = values
    const user = await authRepository.signin(email, password)
    await Router.push('/')
  }

  const layout = {
    labelCol: { span: 12, offset: 6 },
    wrapperCol: { span: 12, offset: 6 },
  }

  return (
    <>
      <Head>
        <title>login</title>
      </Head>
      <div style={{ paddingTop: '30px' }}>
        <div style={{ textAlign: 'center' }}>
          <h1>ログイン</h1>
        </div>
        <Form
          name="basic"
          {...layout}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Item
            label="Email"
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              { required: true, message: 'Please input your email!' },
            ]}
          >
            <Input />
          </Item>

          <Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Item>

          <Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Item>

          <Item wrapperCol={{ offset: 6, span: 3 }}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Item>
        </Form>
        <Col offset={6}>
          <Link href="/signup">
            <a>アカウントの新規登録はこちらから</a>
          </Link>
        </Col>
      </div>
    </>
  )
}

export default Login
