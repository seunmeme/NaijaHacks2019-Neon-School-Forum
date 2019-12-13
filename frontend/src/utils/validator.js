import validator from 'validator';

const loginValidator = (user) => {
  const error = {};

  if (validator.isEmpty(user.username)) {
    error.username = 'Username field is required';
  }
  if (validator.isEmpty(user.password)) {
    error.password = 'Password field is required';
  } else if (user.password.length < 6) {
    error.password = 'Password must not be less than 6 characters'
  } 
  return error;
}

const signupValidator = (user) => {
  const error = {};

  if (validator.isEmpty(user.email)) {
    error.email = 'Email field is required';
  } else if (!validator.isEmail(user.email)) {
    error.email = 'Invalid Email Address';
  }
  if (validator.isEmpty(user.fullname)) {
    error.fullname = 'Fullname field is required';
  } 
  if (validator.isEmpty(user.username)) {
    error.username = 'Username field is required';
  } 
  if (validator.isEmpty(user.password)) {
    error.password = 'Password field is required';
  } 
  if (validator.isEmpty(user.repeatPassword)) {
    error.repeatPassword = 'Repeat Password field is required';
  }
  if (user.password !== user.repeatPassword){
    error.repeatPassword = 'Password does not match with Repeat Pasword';
    error.password = 'Password does not match with Repeat Pasword';
  }
  return error;
}
export {
  loginValidator,
  signupValidator,
}; 