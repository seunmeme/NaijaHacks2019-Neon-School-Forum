import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import './LoginForm.scss'

const LoginForm = () => (
  <Form>
    <Form.Input label='Email' placeholder="Email" />
    <Form.Input label='Password' type='password' />
    <Button type='submit' className="btn">Login</Button>
  </Form>
)

export default LoginForm;
