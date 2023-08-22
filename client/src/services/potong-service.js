import axios from "axios";
const apiUrl = import.meta.env.VITE_DAGINGUE_API_URL;

export const addPotong = (data, callback) => {
  axios.post(apiUrl + '/api/potong', data).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  })
};

export const getPotong = (callback) => {
  axios.get(apiUrl + '/api/potong').then(res => {
    callback(res.data);
  }).catch(err => {
    callback(err.response);
  })
};

export const deletePotong = (id, callback) => {
  axios.delete(apiUrl + '/api/potong/' + id).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  });
};

export const getDetailPotong = (id, callback) => {
  axios.get(apiUrl + '/api/potong/' + id).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  });
};

export const putPotong = (id, data, callback) => {
  axios.put(apiUrl + '/api/potong/' + id, data).then(res => {
    callback(res);
  }).catch(err => {
    callback(err.response);
  });
}