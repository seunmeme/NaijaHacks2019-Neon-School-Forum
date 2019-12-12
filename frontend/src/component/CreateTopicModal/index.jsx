import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import CreateTopicForm from '../CreateTopicForm';
// import './CreateTopicModal.scss'
;
const CreateTopicModal = () => (
  <Modal size="tiny" trigger={<Button color="red">Create Topic</Button>} closeIcon>
    <Header className="grey" content='Create Topic' />
    <Modal.Content>
      <CreateTopicForm />
    </Modal.Content>
  </Modal>
)

export default CreateTopicModal;
