import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import SignupForm from '../SignupForm';
import './SignupModal.scss'
;
const SignupModal = () => (
  <Modal size="mini" trigger={<Button color="red">Get Started</Button>} closeIcon>
    <Header className="grey" content='Register' />
    <Modal.Content>
      <SignupForm />
    </Modal.Content>
  </Modal>
)

export default SignupModal;
