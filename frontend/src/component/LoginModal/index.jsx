import React, {Component} from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import LoginForm from '../LoginForm';
import './LoginModal.scss';

class LoginModal extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render(){
    console.log(this.state.modalOpen, 'modal state')
    return(
      <Modal
        size="mini"
        trigger={<Button color="red" onClick={this.handleOpen}>Login</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        closeIcon
      >
        <Header className="ui" content='Login' />
        <Modal.Content>
          <LoginForm closeModal={this.handleClose} />
        </Modal.Content>
      </Modal>
    )
  }
} 




export default LoginModal;
