import axios from "axios";

export const addPotong = (data, callback) => {
  axios.post('http://localhost:4000/api/potong', data).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  })
};

export const getPotong = (callback) => {
  axios.get('http://localhost:4000/api/potong').then(res => {
    callback(res.data);
  }).catch(err => {
    callback(err.response);
  })
};

export const deletePotong = (id, callback) => {
  axios.delete(`http://localhost:4000/api/potong/${id}`).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  });
};

export const getDetailPotong = (id, callback) => {
  axios.get(`http://localhost:4000/api/potong/${id}`).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  });
};

export const putPotong = (id, data, callback) => {
  axios.put(`http://localhost:4000/api/potong/${id}`, data).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  });
}