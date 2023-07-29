import axios from 'axios';

export const login = (data, callback) => {
  axios.post('http://localhost:4000/login', data, {withCredentials: true}).then(res => {
    callback(res.data.status, res);
  }).catch(err => {
    throw err;
  });
};

export const getToken = (callback) => {
  axios.get('http://localhost:4000/profile',{withCredentials: true}).then(res => {
    callback(res);
  }).catch(err => {
    throw err;
  })
}