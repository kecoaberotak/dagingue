import axios from "axios";

export const addBumbu = (data, callback) => {
  axios.post('http://localhost:4000/api/bumbu', data).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  })
};

export const getBumbu = (callback) => {
  axios.get('http://localhost:4000/api/bumbu').then(res => {
    callback(res.data);
  }).catch(err => {
    callback(err.response);
  })
};

export const deleteBumbu = (data, callback) => {
  axios.delete('http://localhost:4000/bumbu/', data).then(res => {
    callback(res.data);
  }).catch(err => {
    callback(err.response);
  });
};