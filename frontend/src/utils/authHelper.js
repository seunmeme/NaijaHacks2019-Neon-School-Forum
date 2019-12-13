export const setToken = (studentToken) => {
  localStorage.setItem('token', JSON.stringify(studentToken));
}

export const studentTokenInLocalStorage = JSON.parse(localStorage.getItem('token'));

export const configUser = (studentTokenInLocalStorage) => {
  if(studentTokenInLocalStorage) {
    return {headers: { 'auth-token': studentTokenInLocalStorage.accessToken}}
  }
};

export const logout = () => {
  localStorage.removeItem('user');
  window.location.reload();
}