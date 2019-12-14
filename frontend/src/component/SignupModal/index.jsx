import React, { useState } from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import SignupForm from '../SignupForm';
import './SignupModal.scss'

const SignupModal = () => {

  const [ modalOpen, setModalOpen ] = useState(false);

  const handleClose = () => setModalOpen(false);

  const handleOpen = () => setModalOpen(true);

  return (
    <Modal 
      size="mini" 
      trigger={<Button 
      color="red" onClick={handleOpen}>Get Started</Button>} 
      closeIcon
      open={modalOpen}
      onClose={handleClose}
    >
      <Header className="grey" content='Register' />
      <Modal.Content>
        <SignupForm closeModal={handleClose} />
      </Modal.Content>
    </Modal>
  )
}

export default SignupModal;
