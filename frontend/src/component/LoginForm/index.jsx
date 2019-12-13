import React, {Component} from 'react'
import { Button, Form, Message } from 'semantic-ui-react'
import {connect} from 'react-redux'
// import PropTypes from 'prop-types';
import { loginValidator } from '../../utils/validator'
import { loginStudent } from '../../store/actions'
import './LoginForm.scss'

class LoginForm extends Component{

  state = {
    user: {
      username: '',
      password: ''
    },
    error: {}
  }

  handleChange = (e, data ) => {
    const { user } = this.state;
    const { name, value } = data;
    user[name] = value;
    this.setState({ user });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { user } = this.state;
    const { loginStudent } = this.props;
    this.setState(() => ({error: {}}))
    const error = loginValidator(user);
    if (Object.keys(error).length) {
      this.setState(() => ({ error }));
    } 
    else {
      loginStudent(user, () => {
        if(this.props.students.isAuthenticated){
          this.props.closeModal()
        }
      });
    }
  }

  render(){
    const {error} = this.state;
    const {loading, errorMessage, isAuthenticated} = this.props.students;
    return(
      <Form
        onSubmit={this.handleSubmit}
        loading={loading && true}
        error={!isAuthenticated && true} >
        {errorMessage && <Message
          error
          header='Login Error'
          content={errorMessage}
        />}
        <Form.Input 
          label='Username'
          name="username" 
          onChange={this.handleChange} 
          placeholder="username"
          error={error.hasOwnProperty('username') ? {
            content: error.username,
            pointing: 'below',
          } : false }
        />
        <Form.Input
          label='Password'
          name="password"
          onChange={this.handleChange}
          type='password'
          error={error.hasOwnProperty('password') ? {
            content: error.password,
            pointing: 'below',
          } : false}
        />
        <Button type='submit' onSubmit={this.handleSubmit} className="btn">Login</Button>
      </Form>
    )
  }
}

// LoginForm.propTypes = {
//   error: true
// }

// LoginForm.defaultProps = {
//   error: false
// }
const mapStateToProps = state => {
  const {students} = state;
  console.log(students, 'store')
  return ({students})

}


export default connect(mapStateToProps, { loginStudent })(LoginForm);
