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

export const deleteBumbu = (id, callback) => {
  axios.delete(`http://localhost:4000/api/bumbu/${id}`).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  });
};

export const getDetailBumbu = (id, callback) => {
  axios.get(`http://localhost:4000/api/bumbu/${id}`).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  });
};

export const editBumbu = (id, callback) => {
  axios.put(`http://localhost:4000/api/bumbu/${id}`).then(res => {
    callback(res.data);
  }).catch(err => {
    callback(err.response);
  });
}