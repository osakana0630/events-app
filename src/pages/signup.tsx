import { Form, Input, Button, Col } from 'antd'
import RepositoryFactory from '../resources/RepositoryFactory'
import Link from 'next/link'
import Head from 'next/head'
const { Item } = Form
const authRepository = RepositoryFactory.get('auth')

const Signup = () => {
  // submit時のイベントハンドラ
  const onFinish = async (values) => {
    const { email, password } = values
    await authRepository.signup(email, password)
  }

  const layout = {
    labelCol: { span: 12, offset: 6 },
    wrapperCol: { span: 12, offset: 6 },
  }

  return (
    <>
      <Head>
        <title>signup</title>
      </Head>
      <div style={{ paddingTop: '30px' }}>
        <div style={{ textAlign: 'center' }}>
          <h1>サインアップ</h1>
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

          <Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(
                    new Error(
                      'The two passwords that you entered do not match!',
                    ),
                  )
                },
              }),
            ]}
          >
            <Input.Password />
          </Item>

          <Item wrapperCol={{ offset: 6, span: 3 }}>
            <Button type="primary" htmlType="submit">
              登録
            </Button>
          </Item>
        </Form>
        <Col offset={6}>
          <Link href="/login">
            <a>登録済みの方はこちらから</a>
          </Link>
        </Col>
      </div>
    </>
  )
}

export default Signup
