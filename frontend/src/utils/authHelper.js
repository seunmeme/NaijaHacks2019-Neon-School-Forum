export const setToken = (studentToken) => {
  localStorage.setItem('token', JSON.stringify(studentToken));
}

export const token = JSON.parse(localStorage.getItem('token'));

export const configUser = (token) => {
  if(token) {
    return {headers: { 'auth-token': token.accessToken}}
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  window.location.reload();
}