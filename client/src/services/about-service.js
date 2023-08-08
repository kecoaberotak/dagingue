import axios from "axios";

export const getContent = (callback) => {
  axios.get('http://localhost:4000/api/about').then(res => {
    callback(res.data);
  }).catch(err => {
    callback(err.response);
  })
};

export const addContent = (data, callback) => {
  axios.post('http://localhost:4000/api/about', data).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  })
};

export const getDetailContent = (id, callback) => {
  axios.get(`http://localhost:4000/api/about/${id}`).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  });
};

export const putContent = (id, data, callback) => {
  axios.put(`http://localhost:4000/api/about/${id}`, data).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  });
};