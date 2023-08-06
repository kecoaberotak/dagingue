import axios from 'axios';

export const login = (data, callback) => {
  axios.post('http://localhost:4000/auth/login', data, {withCredentials: true}).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  });
};

export const getToken = (callback) => {
  axios.get('http://localhost:4000/auth/login',{withCredentials: true}).then(res => {
    callback(res.data);
  }).catch(err => {
    callback(err.response);
  })
};

export const logout = (callback) => {
  axios.post('http://localhost:4000/auth/logout', {withCredentials: true}).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  });
};