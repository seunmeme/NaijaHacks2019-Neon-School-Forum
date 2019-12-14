import React, {Component} from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import CreateTopicForm from '../CreateTopicForm';

class CreateTopicModal extends Component{
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })
  
  render() {
    return(
      <Modal
          size="tiny"
          trigger={<Button onClick={this.handleOpen} color="red">Create Topic</Button>}
          closeIcon
          open={this.state.modalOpen}
          onClose={this.handleClose}
        >
          <Header className="ui" content='Create Topic' />
          <Modal.Content>
            <CreateTopicForm closeModal={this.handleClose} />
          </Modal.Content>
        </Modal>
    )
  }
} 


export default CreateTopicModal;
