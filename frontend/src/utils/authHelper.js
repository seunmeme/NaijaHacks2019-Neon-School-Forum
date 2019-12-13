export const setToken = (studentToken) => {
  localStorage.setItem('student', JSON.stringify(studentToken));
}

export const studentTokenInLocalStorage = JSON.parse(localStorage.getItem('student'));

export const configUser = (studentTokenInLocalStorage) => {
  if(studentTokenInLocalStorage) {
    return {headers: { 'auth-token': getUser.accessToken}}
  }
};

export const logout = () => {
  localStorage.removeItem('user');
  window.location.reload();
}