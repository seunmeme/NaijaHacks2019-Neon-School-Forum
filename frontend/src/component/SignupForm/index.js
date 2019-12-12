import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const SignupForm = () => (
  <Form>
    <Form.Input label='Full Name' placeholder="Full Name" />
    <Form.Input label='Email' placeholder="Email" />
    <Form.Group widths="2">
      <Form.Input label='Password' type='password' />
      <Form.Input label='Repeat Password' type='password' />
    </Form.Group>
    <Form.Input label='Name of School' placeholder="Name of school" />
    <Form.Input label='UserName' placeholder="Username" />
    <Button type='submit'>Submit</Button>
  </Form>
)

export default SignupForm;
