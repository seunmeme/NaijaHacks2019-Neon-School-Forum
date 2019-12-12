import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import LoginForm from '../LoginForm';
import './LoginModal.scss'
;
const LoginModal = () => (
  <Modal size="mini" trigger={<Button color="red">Login</Button>} closeIcon>
    <Header className="grey" content='Login' />
    <Modal.Content>
      <LoginForm />
    </Modal.Content>
  </Modal>
)

export default LoginModal;
