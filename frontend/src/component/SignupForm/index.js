import React, { useState } from 'react'
import { Button, Form, Message } from 'semantic-ui-react'
import { signupValidator } from '../../utils/validator'
import { connect } from 'react-redux'
import { signupStudent } from '../../store/actions'

const SignupForm = (props) => {
  const [ fullname, setFullname ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ repeatPassword, setRepeatPassword ] = useState("");
  const [ school, setSchool ] = useState("");
  const [ username, setUsername ] = useState("");
  const [ error, setError ] = useState({});
  

  const handleChange = (e, data) => {
    const { name, value } = data;
    switch (name) {
      case "fullname":
        setFullname(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
      break;
      case "repeatPassword":
        setRepeatPassword(value);
        break;
      case "school":
        setSchool(value);
        break;
      case "username":
        setUsername(value);
        break;
      default:
        break;
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      fullname,
      email,
      password,
      repeatPassword,
      school,
      username
    };

    const { signupStudent } = props;
    setError({});
    const validatorError = signupValidator(user);

    if (Object.keys(validatorError).length) {
      setError(validatorError);
    } 
    else {
      signupStudent(user, () => {
        if(props.students.isAuthenticated){
          props.closeModal()
        }
      });
    }
  }

  return(
    <Form
    onSubmit={handleSubmit}
    loading={props.students.loading && true}
    error={!props.students.isAuthenticated && true} 
    >
        {props.students.errorMessage && <Message
          error
          header='Sign up Error'
          content={props.students.errorMessage}
        />}
      <Form.Input 
        label='Full Name' 
        placeholder="Full Name" 
        onChange={handleChange} 
        name="fullname"
        error={error.hasOwnProperty('fullname') ? {
          content: error.fullname,
          pointing: 'below',
        } : false }
      />
      <Form.Input 
        label='Email' 
        placeholder="Email" 
        onChange={handleChange} 
        name="email"
        error={error.hasOwnProperty('email') ? {
          content: error.email,
          pointing: 'below',
        } : false }
      />
      <Form.Group widths="2">
        <Form.Input 
          label='Password' 
          type='password' 
          onChange={handleChange} 
          name="password"
          error={error.hasOwnProperty('password') ? {
            content: error.password,
            pointing: 'below',
          } : false }
        />
        <Form.Input 
          label='Repeat Password' 
          type='password' 
          onChange={handleChange} 
          name="repeatPassword"
          error={error.hasOwnProperty('repeatPassword') ? {
            content: error.repeatPassword,
            pointing: 'below',
          } : false }
        />
      </Form.Group>
      <Form.Input 
        label='Name of School' 
        placeholder="Name of school" 
        onChange={handleChange}  
        name="school" 
        error={error.hasOwnProperty('school') ? {
          content: error.school,
          pointing: 'below',
        } : false }
      />
      <Form.Input 
        label='Username' 
        placeholder="Username" 
        onChange={handleChange} 
        name="username"
        error={error.hasOwnProperty('username') ? {
          content: error.username,
          pointing: 'below',
        } : false }
      />
        <Button type='submit' className="btn">Login</Button>
    </Form>
  )
}

const mapStateToProps = state => {
  const {students} = state;
  return ({students})
}

export default connect(mapStateToProps, { signupStudent })(SignupForm);
