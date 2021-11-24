import { Form, Input, Button } from 'antd'
const { Item } = Form

const Login = () => {
  const onFinish = (values) => {
    const { email, password } = values
  }

  const layout = {
    labelCol: { span: 12, offset: 6 },
    wrapperCol: { span: 12, offset: 6 },
  }

  return (
    <Form
      style={{ paddingTop: '30px' }}
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

      <Item wrapperCol={{ offset: 6, span: 3 }}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Item>
    </Form>
  )
}

export default Login
