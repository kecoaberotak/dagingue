import axios from 'axios';

export const login = (data, callback) => {
  axios.post('https://dagingue-api.vercel.app/auth/login', data, {withCredentials: true}).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  });
};

export const getToken = (callback) => {
  axios.get('https://dagingue-api.vercel.app/auth/login',{withCredentials: true}).then(res => {
    callback(res.data);
  }).catch(err => {
    callback(err.response);
  })
};

export const logout = (callback) => {
  axios.post('https://dagingue-api.vercel.app/auth/logout', {withCredentials: true}).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  });
};